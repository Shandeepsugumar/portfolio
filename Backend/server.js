const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { from_name, from_email, subject, message } = req.body;

  // Configure your SMTP transporter (use Gmail, Outlook, etc.)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shandeepgeek@gmail.com', // <-- Replace with your email
      pass: 'tlwa qyvv ubsj mmgw'    // <-- Replace with your app password
    }
  });

  // Email to you
  const mailToMe = {
    from: from_email,
    to: 'shandeepgeek@gmail.com', // <-- Replace with your email
    subject: `Portfolio Contact: ${subject}`,
    text: `From: ${from_name} <${from_email}>\n\n${message}`
  };

  // Confirmation email to user
  const mailToUser = {
    from: 'shandeepgeek@gmail.com', // <-- Replace with your email
    to: from_email,
    subject: 'Thank you for contacting me!',
    text: `Hi ${from_name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nYour message:\n${message}\n\nBest regards,\nShandeep`
  };

  try {
    await transporter.sendMail(mailToMe);
    await transporter.sendMail(mailToUser);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 