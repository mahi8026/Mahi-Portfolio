// EmailJS Configuration
// SECURITY FIX: Use environment variables instead of hardcoded credentials
// Create a .env.local file in the root directory with your EmailJS credentials

export const emailjsConfig = {
  serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

// Validate configuration
export const isEmailConfigured = () => {
  return !!(
    emailjsConfig.serviceID &&
    emailjsConfig.templateID &&
    emailjsConfig.publicKey
  );
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your service ID, template ID, and public key
// 6. Create .env.local file and add:
//    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
//    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
