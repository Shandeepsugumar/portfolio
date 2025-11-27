# Email Configuration Summary

## What has been set up:

### Backend Configuration (NodeMailer)
Your portfolio contact form is now fully configured with nodemailer to handle email functionality. Here's what happens when someone submits the contact form:

1. **Main Email to You**: All contact form submissions are sent to **shandeepgeek@gmail.com**
2. **Auto-Reply Email**: The person who fills out the form receives an automatic thank-you email

### Configuration Details:

#### Backend (.env file):
- `EMAIL_USER`: shandeeps2004@gmail.com (sender email)
- `EMAIL_PASS`: Your Gmail app password
- `EMAIL_TO`: **shandeepgeek@gmail.com** (recipient - your email)
- SMTP settings configured for Gmail

#### Frontend:
- Contact form now points to local backend (http://localhost:5000) for development
- Can be easily switched to production URL by setting VITE_API_URL environment variable

### Email Flow:

When someone fills the contact form with their details:
1. **Name**: from_name
2. **Email**: from_email  
3. **Subject**: subject
4. **Message**: message

Two emails are sent:

#### Email 1 - To You (shandeepgeek@gmail.com):
```
Subject: Portfolio Contact: [their subject]
From: Portfolio Contact <shandeeps2004@gmail.com>
Reply-To: [their email]

From: [their name] <[their email]>

[their message]
```

#### Email 2 - Auto-Reply to User:
```
Subject: Thank you for contacting Portfolio Contact
To: [their email]
From: Portfolio Contact <shandeeps2004@gmail.com>

Hi [their name],

Thank you for contacting me! I have received your message and will review it carefully. I will get back to you as quickly as possible.

Your message:
[their message]

Best regards,
Shandeep
```

## How to Test:

### Current Setup (Local Development):
1. Backend server is running on port 5000 ✓
2. Frontend dev server is running on port 5173 ✓
3. Go to your portfolio: http://localhost:5173
4. Navigate to the Contact section
5. Fill in the form with test data
6. Click Submit
7. Check **shandeepgeek@gmail.com** for the contact message
8. Check the email you used in the form for the auto-reply

### Production Deployment:
When deploying to production, update the Frontend `.env` file:
```
VITE_API_URL=https://your-production-backend-url.com
```

## Important Notes:

1. **Gmail App Password**: Make sure `EMAIL_PASS` in Backend/.env is a valid Gmail App Password (not your regular Gmail password)
2. **CORS**: The backend is configured to allow requests from:
   - http://localhost:5173 (local development)
   - https://shandeep-portfolio-arkz.vercel.app
   - https://portfolio-9zi4.vercel.app

3. **Email Service**: Currently using Gmail SMTP. For production, you might want to consider:
   - Resend API (already supported in the code)
   - SendGrid
   - Amazon SES

## Files Modified:

1. `Backend/.env` - Updated EMAIL_TO to shandeepgeek@gmail.com
2. `Backend/server.js` - Enhanced auto-reply message (already was good)
3. `Frontend/src/pages/Home.jsx` - Updated to use environment variable for API URL
4. `Frontend/.env` - Created new file for local development configuration

## Everything is Ready! 🎉

Your contact form is now fully functional with nodemailer. Test it out and you should receive emails at shandeepgeek@gmail.com!
