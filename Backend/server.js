const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(o => o.trim()).filter(Boolean);
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = (process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM || 'Portfolio Bot <onboarding@resend.dev>';
const resendClient = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || 'Portfolio Contact';

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        return callback(null, true);
      }
      // If ALLOWED_ORIGINS is not set, allow all origins (for development)
      if (ALLOWED_ORIGINS.length === 0) {
        return callback(null, true);
      }
      // Check if the origin is in the allowed list
      if (ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// Handle preflight requests explicitly
app.options('*', cors());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { from_name, from_email, subject, message } = req.body;

  if (!from_name || !from_email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const mailSubject = `Portfolio Contact: ${subject}`;
  const mailBody = `From: ${from_name} <${from_email}>\n\n${message}`;
  const autoReplyBody = `Hi ${from_name},\n\nThank you for contacting me! I have received your message and will review it carefully. I will get back to you as quickly as possible.\n\nYour message:\n${message}\n\nBest regards,\nShandeep`;

  try {
    if (resendClient) {
      await resendClient.emails.send({
        from: RESEND_FROM,
        to: EMAIL_TO,
        replyTo: from_email,
        subject: mailSubject,
        text: mailBody,
      });

      await resendClient.emails.send({
        to: from_email,
        subject: `Thank you for contacting ${EMAIL_FROM_NAME}`,
        text: autoReplyBody,
      });
    } else {
      if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
        console.error('Missing email credentials. Ensure EMAIL_USER, EMAIL_PASS, and EMAIL_TO are set.');
        return res.status(500).json({ success: false, error: 'Email service not configured.' });
      }

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE, // true for 465, false for other ports
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
        connectionTimeout: Number(process.env.SMTP_TIMEOUT || 30_000), // 30 seconds
        greetingTimeout: 30_000,
        socketTimeout: 30_000,
        debug: process.env.NODE_ENV === 'development',
        logger: process.env.NODE_ENV === 'development',
      });

      await transporter.sendMail({
        from: `${EMAIL_FROM_NAME} <${EMAIL_USER}>`,
        replyTo: from_email,
        to: EMAIL_TO,
        subject: mailSubject,
        text: mailBody,
      });

      await transporter.sendMail({
        from: `${EMAIL_FROM_NAME} <${EMAIL_USER}>`,
        to: from_email,
        subject: `Thank you for contacting ${EMAIL_FROM_NAME}`,
        text: autoReplyBody,
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ success: false, error: 'Origin not allowed' });
  }
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});