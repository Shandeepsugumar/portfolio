const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { from_name, from_email, subject, message } = req.body;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.error('Missing email credentials. Ensure EMAIL_USER, EMAIL_PASS, and EMAIL_TO are set.');
    return res.status(500).json({ success: false, error: 'Email service not configured.' });
  }

  if (!from_name || !from_email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailToMe = {
    from: EMAIL_USER,
    replyTo: from_email,
    to: EMAIL_TO,
    subject: `Portfolio Contact: ${subject}`,
    text: `From: ${from_name} <${from_email}>\n\n${message}`,
  };

  const mailToUser = {
    from: EMAIL_USER,
    to: from_email,
    subject: 'Thank you for contacting me!',
    text: `Hi ${from_name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nYour message:\n${message}\n\nBest regards,\nShandeep`,
  };

  try {
    await transporter.sendMail(mailToMe);
    await transporter.sendMail(mailToUser);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});