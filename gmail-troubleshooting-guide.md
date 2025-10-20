# 📧 Gmail Delivery Troubleshooting Guide

## 🔍 **Issue: Emails Sent but Not Received**

Your Resend dashboard shows emails are "Delivered" but you're not receiving them in Gmail. This is a common Gmail delivery issue.

## 🚀 **Quick Fixes to Try:**

### **1. Check Gmail Spam Folder**
- Open Gmail → Spam folder
- Look for emails from "ITA Groupe Contact"
- If found, mark as "Not Spam"

### **2. Check All Gmail Tabs**
- **Primary Tab**: Main inbox
- **Promotions Tab**: Marketing emails often go here
- **Social Tab**: Social media notifications
- **Updates Tab**: Receipts, confirmations

### **3. Search Gmail for Your Emails**
- Search for: `from:noreply@itagroupe.com`
- Search for: `from:onboarding@resend.dev`
- Search for: "ITA Groupe Contact"
- Search for: "New Contact Form Submission"

### **4. Check Gmail Filters**
- Gmail → Settings → Filters and Blocked Addresses
- Look for filters blocking your emails
- Check if any filters are moving emails to trash

### **5. Check Gmail Blocked Senders**
- Gmail → Settings → Filters and Blocked Addresses
- Check "Blocked addresses" section
- Remove any blocks on your domain

## 🔧 **Advanced Solutions:**

### **1. Add to Contacts**
- Add `noreply@itagroupe.com` to your Gmail contacts
- This helps Gmail trust the sender

### **2. Whitelist Your Domain**
- Gmail → Settings → Filters and Blocked Addresses
- Create filter: `from:itagroupe.com`
- Action: "Never send it to Spam"

### **3. Check Gmail Storage**
- Make sure your Gmail isn't full
- Delete old emails if needed

### **4. Try Different Email Address**
- Test with a different Gmail address
- Test with a non-Gmail address (Yahoo, Outlook)

## 📧 **Test Your Setup:**

Run this test to verify email delivery:

```bash
node test-gmail-delivery.js
```

## 🎯 **Expected Results:**

After running the test, you should:
1. ✅ See "Email sent successfully" in terminal
2. ✅ Receive email in Gmail within 1-2 minutes
3. ✅ Email should come from "ITA Groupe Contact <noreply@itagroupe.com>"

## 🚨 **If Still Not Working:**

### **Option 1: Use Different Email Service**
- Try sending to a different email provider
- Test with Yahoo, Outlook, or another Gmail account

### **Option 2: Check Gmail Settings**
- Gmail → Settings → Forwarding and POP/IMAP
- Make sure forwarding is not interfering

### **Option 3: Contact Gmail Support**
- If emails are marked as "Delivered" but not received
- This might be a Gmail-side issue

## 📊 **Monitoring:**

Check your Resend dashboard for:
- ✅ **Status**: Should show "Delivered"
- ✅ **Bounces**: Should be 0
- ✅ **Complaints**: Should be 0
- ❌ **Blocks**: Should be 0

## 🎉 **Success Indicators:**

When working correctly, you should see:
- Emails in Gmail inbox (not spam)
- Professional HTML formatting
- Correct sender: "ITA Groupe Contact <noreply@itagroupe.com>"
- Subject: "New Contact Form Submission: [user's subject]"
