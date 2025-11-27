# Quick Test Guide for Contact Form

## Test Steps:

1. **Open your portfolio in browser**:
   - URL: http://localhost:5173
   - Navigate to the "Contact" section (scroll down or click Contact in navigation)

2. **Fill the form with test data**:
   - Name: Test User
   - Email: your-test-email@example.com (use a real email you can access)
   - Subject: Testing Contact Form
   - Message: This is a test message to verify the nodemailer setup.

3. **Submit the form**

4. **Expected Results**:
   - Success alert: "Email sent successfully!"
   - Check **shandeepgeek@gmail.com** inbox for:
     - Subject: "Portfolio Contact: Testing Contact Form"
     - Body contains: "From: Test User <your-test-email@example.com>"
     - Body contains: "This is a test message..."
   
   - Check **your-test-email@example.com** inbox for:
     - Subject: "Thank you for contacting Portfolio Contact"
     - Body contains: "Hi Test User,"
     - Body contains: "Thank you for contacting me! I have received your message and will review it carefully..."

## Troubleshooting:

### If emails don't arrive:
1. Check spam/junk folders
2. Verify Backend server is running on port 5000
3. Check Backend console for errors
4. Verify Gmail App Password is correct in Backend/.env
5. Check that EMAIL_TO=shandeepgeek@gmail.com in Backend/.env

### If form submission fails:
1. Open Browser Console (F12) and check for errors
2. Verify Frontend can reach Backend (CORS might block it)
3. Check that VITE_API_URL in Frontend/.env points to http://localhost:5000
4. Make sure both servers are running

## Current Server Status:
- ✓ Backend: Running on port 5000
- ✓ Frontend: Running on port 5173 (as per your setup)

## Ready to Test! 🚀
Go ahead and test your contact form. It should send emails to shandeepgeek@gmail.com and auto-reply to the sender!
