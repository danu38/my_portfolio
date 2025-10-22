# Contact Form Email Setup

Your contact form is now configured to use **Web3Forms** - a free email service that requires NO backend code!

## Setup Steps (Takes 2 minutes!)

### 1. Get Your Free API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click **"Create Access Key"**
3. Enter your email address: `danushkasomasiri@gmail.com`
4. Click **"Create Access Key"**
5. Check your email and verify your address
6. Copy the **Access Key** they send you

### 2. Add the Key to Your Contact Form

1. Open `src/components/Contact.jsx`
2. Find this line (around line 273):
   ```javascript
   formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:
   ```javascript
   formData.append('access_key', 'abc123-your-actual-key-xyz789')
   ```

### 3. Test Your Form

1. Save the file
2. Fill out your contact form on the website
3. Submit it
4. Check your email (`danushkasomasiri@gmail.com`) - you'll receive the message!

## Features

✅ **100% Free** - No credit card required
✅ **Unlimited submissions** on free plan
✅ **No backend needed** - Works with static sites
✅ **Spam protection** included
✅ **Email notifications** - Messages go directly to your inbox
✅ **Form validation** - Built-in error handling
✅ **Success/Error messages** - User-friendly feedback

## Alternative Free Services

If you prefer, you can also use:

1. **Formspree** - [https://formspree.io](https://formspree.io)
2. **EmailJS** - [https://www.emailjs.com](https://www.emailjs.com)
3. **Getform** - [https://getform.io](https://getform.io)

All offer free tiers with similar functionality!

## Need Help?

If you have any issues:
- Check the Web3Forms documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Make sure you verified your email
- Check your spam folder for the verification email
