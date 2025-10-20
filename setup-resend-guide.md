# 📧 Resend Email Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Resend API Key
1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Sign Up" or "Log In"
3. Verify your email address
4. Click "Create API Key"
5. Give it a name like "ITA Groupe Contact Form"
6. Copy the API key (starts with `re_`)

### Step 2: Add API Key to Your Project
1. Open your `.env.local` file
2. Replace `your_resend_api_key_here` with your actual API key:

```bash
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration - Using Resend default domain for testing
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=hello.itagroupe@gmail.com

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### Step 3: Restart Your Server
```bash
# Stop your current server (Ctrl+C)
# Then restart
npm run dev
```

### Step 4: Test Email Sending
```bash
node test-email-sending.js
```

## ✅ Expected Results

After setup, you should see:
- ✅ **SUCCESS!** message in terminal
- 📧 **Email received** at hello.itagroupe@gmail.com
- 📧 **Email from**: ITA Groupe Contact <onboarding@resend.dev>
- 📧 **Subject**: New Contact Form Submission: [test subject]

## 🔍 Troubleshooting

### If you get "API key is invalid":
- Double-check you copied the full API key
- Make sure there are no extra spaces
- Restart your server after adding the key

### If you get "Domain not verified":
- This is normal! We're using `onboarding@resend.dev` for testing
- This domain works without verification
- For production, you'll need to verify your own domain

### If emails go to spam:
- Check your spam folder
- Add `onboarding@resend.dev` to your contacts
- The emails will come from "ITA Groupe Contact"

## 🎯 What Happens Next

1. **Test emails work** with Resend default domain
2. **Contact form works** and sends real emails
3. **You receive emails** at hello.itagroupe@gmail.com
4. **Later**: You can verify your own domain for production

## 📧 Email Features

- **Professional HTML template** with all form data
- **Multi-language support** (EN/FR/PL)
- **Reply-to** set to user's email
- **Detailed form information** in email body
- **Success confirmation** in contact form

Ready to test! 🚀
