# EmailJS Setup Guide for Thistle Cleaning

## Overview
The booking and contact forms now use **EmailJS** to send emails to your customers and receive confirmations. This provides:
- ✅ Automatic confirmation emails to customers
- ✅ Booking notifications to your admin email
- ✅ Reliable email delivery (not blocked by spam filters)
- ✅ Free tier available

## Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click **Sign Up** and create a free account
3. Verify your email address

### 2. Create Email Service
1. Log in to EmailJS dashboard
2. Click **Email Services** in the left menu
3. Click **Create New Service**
4. Choose **Gmail** or **Outlook** (or your email provider)
5. Follow the prompts to connect your email
6. **Save the Service ID** - you'll need this

### 3. Create Email Templates

#### Template 1: Booking Confirmation (sends to customer)
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set Template Name: `booking_confirmation`
4. Set Subject: `Booking Confirmation - Thistle Prime Cleaning`
5. Use this template body:

```html
<div
  style="
    font-family: system-ui, sans-serif, Arial;
    font-size: 14px;
    color: #333;
    padding: 20px 8px;
    background-color: #f5f5f5;
  "
>
  <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 4px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="border-top: 6px solid #458500; padding: 20px; background-color: #fff;">
      <span style="font-size: 18px; vertical-align: middle; color: #458500;">
        <strong>Booking Received</strong>
      </span>
    </div>

    <div style="padding: 0 24px 24px 24px">
      <h2 style="color: #333; font-size: 20px; margin-top: 10px;">Thank you for booking with Thistle Prime Cleaning!</h2>
      
      <p style="font-size: 16px; line-height: 1.5;">Hi <strong>{{customer_name}}</strong>,</p>
      <p style="color: #666; margin-bottom: 20px;">We received your booking request. Here are the details of your scheduled service:</p>

      <div style="background-color: #f9f9f9; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.8;">
          <tr>
            <td style="width: 40%; color: #888;"><strong>Service:</strong></td>
            <td><strong>{{service_name}}</strong></td>
          </tr>
          <tr>
            <td style="color: #888;"><strong>Date:</strong></td>
            <td>{{booking_date}}</td>
          </tr>
          <tr>
            <td style="color: #888;"><strong>Time:</strong></td>
            <td>{{booking_time}}</td>
          </tr>
          <tr>
            <td style="color: #888;"><strong>Address:</strong></td>
            <td>{{address}}</td>
          </tr>
          <tr>
            <td style="color: #888;"><strong>Property Type:</strong></td>
            <td>{{property_type}}</td>
          </tr>
          <tr>
            <td style="color: #888;"><strong>Home Size:</strong></td>
            <td>{{bedrooms}} Bedrooms, {{bathrooms}} Bathrooms</td>
          </tr>
        </table>
      </div>

      <div style="margin-bottom: 24px;">
        <p style="margin-bottom: 8px; color: #333;"><strong>Special Requests:</strong></p>
        <div style="padding: 12px; border-left: 4px solid #458500; background: #fcfcfc; font-style: italic; color: #555;">
          {{special_requests}}
        </div>
      </div>

      <p style="background-color: #e8f3d9; color: #2e5900; padding: 12px; border-radius: 4px; text-align: center;">
        We will review your booking and contact you within <strong>24 hours</strong> to confirm.
      </p>

      <div style="padding: 24px 0; border-top: 1px solid #eee; margin-top: 24px;">
        <p style="margin: 0; font-size: 13px; color: #666;">
          <strong>Questions?</strong> Call us at <a href="tel:+447440620492" style="color: #458500; text-decoration: none;">+44 7440 620492</a><br />
          <strong>Email:</strong> <a href="mailto:thistleprimecleaning@gmail.com" style="color: #458500; text-decoration: none;">thistleprimecleaning@gmail.com</a>
        </p>
      </div>

      <p style="margin-top: 20px; color: #333;">
        Best regards,<br />
        <strong>Thistle Prime Cleaning Team</strong>
      </p>
    </div>
  </div>

  <div style="max-width: 600px; margin: auto; text-align: center; padding-top: 20px;">
    <p style="color: #999; font-size: 12px;">
      This email was sent because you requested a cleaning service.<br />
      &copy; 2026 Thistle Prime Cleaning
    </p>
  </div>
</div>
```

6. Save this template and copy the **Template ID**

#### Template 2: Admin Booking Notification (sends to you)
1. Create another template
2. Set Template Name: `booking_notification`
3. Set Subject: `New Booking Request - {{customer_name}}`
4. Use this template body:

```html
<h2>New Booking Request</h2>

<p>You have received a new booking request:</p>

<p>
  <strong>Customer Name:</strong> {{customer_name}}<br>
  <strong>Email:</strong> {{customer_email}}<br>
  <strong>Phone:</strong> {{customer_phone}}
</p>

<p>
  <strong>Service:</strong> {{service_name}}<br>
  <strong>Date:</strong> {{booking_date}}<br>
  <strong>Time:</strong> {{booking_time}}<br>
  <strong>Address:</strong> {{address}}<br>
  <strong>Property Type:</strong> {{property_type}}<br>
  <strong>Bedrooms:</strong> {{bedrooms}}<br>
  <strong>Bathrooms:</strong> {{bathrooms}}
</p>

<p><strong>Special Requests:</strong><br>{{special_requests}}</p>

<p>Please review and contact the customer to confirm.</p>
```

5. Save and copy the **Template ID**

#### Template 3: Contact Form Acknowledgment (sends to customer)
1. Create new template
2. Set Template Name: `contact_acknowledgment`
3. Set Subject: `We received your message - Thistle Prime Cleaning`
4. Use this template body:

```html
<h2>Thank you for contacting Thistle Prime Cleaning</h2>

<p>Hi {{customer_name}},</p>

<p>We received your message and will get back to you as soon as possible.</p>

<p><strong>Your Message:</strong><br>{{customer_message}}</p>

<p>
  <strong>Quick Response:</strong><br>
  Call us at +44 7440 620492<br>
  Email us at thistleprimecleaning@gmail.com
</p>

<p>Best regards,<br>Thistle Prime Cleaning Team</p>
```

5. Save and copy the **Template ID**

#### Template 4: Contact Form Notification (sends to you)
1. Create another template
2. Set Template Name: `contact_notification`
3. Set Subject: `New Message from {{customer_name}}`
4. Use this template body:

```html
<h2>New Contact Form Submission</h2>

<p>
  <strong>Customer Name:</strong> {{customer_name}}<br>
  <strong>Email:</strong> {{customer_email}}<br>
  <strong>Phone:</strong> {{customer_phone}}
</p>

<p>
  <strong>Service Interest:</strong> {{customer_service}}
</p>

<p><strong>Message:</strong><br>{{customer_message}}</p>

<p>Please reply to the customer promptly.</p>
```

5. Save and copy the **Template ID**

### 4. Get Your Public Key
1. In EmailJS dashboard, click **Account**
2. Copy your **Public Key**

### 5. Update Your Code

Update the constants in both files:

**File 1:** `src/pages/Order.jsx` (lines 4-8)
```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_BOOKING_TEMPLATE_ID = 'booking_confirmation';
const EMAILJS_CONFIRMATION_TEMPLATE_ID = 'booking_notification';
```

**File 2:** `src/pages/Contact.jsx` (lines 4-8)
```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_CONTACT_TEMPLATE_ID = 'contact_notification';
const EMAILJS_CONTACT_ACK_TEMPLATE_ID = 'contact_acknowledgment';
```

Also update `admin_email` in both files to your actual email address.

### 6. Test the Forms
1. Run `npm run dev`
2. Go to the booking page
3. Fill out and submit the form
4. Check both your email and the customer email to ensure both messages arrive

## Troubleshooting

### Emails not arriving?
- Check emailjs.com console for error messages
- Verify Public Key and Service ID are correct
- Ensure templates are correctly named
- Check spam folder

### Free Tier Limits
- EmailJS free tier allows 200 emails/month
- For higher volumes, upgrade to paid plan

## Support
- EmailJS Docs: https://www.emailjs.com/docs/
- Contact EmailJS support if you encounter issues
