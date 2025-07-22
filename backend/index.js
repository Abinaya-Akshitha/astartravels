// 📦 Load packages
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Loads .env if running locally

// 🚀 Create Server
const app = express();
const PORT = 5000;

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 📬 Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // e.g. example@gmail.com (SENDER)
    pass: process.env.EMAIL_PASS  // Gmail App Password (from https://myaccount.google.com/apppasswords)
  }
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ A-Star Travels Backend is running!');
});

// 📨 Contact form submission
app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log('📨 New Contact Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Subject:', subject);
  console.log('Message:', message);
  console.log('------------------------');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'astartravels.sg@gmail.com', // Change this to your client's email
    subject: `📧 New Contact: ${subject}`,
    text: `
You have a new contact message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email error (contact):', error);
      return res.status(500).json({ message: 'Failed to send contact email.' });
    }
    console.log('📧 Contact Email sent:', info.response);
    res.status(200).json({ message: '✅ Contact email sent successfully!' });
  });
});

// 🚌 Booking form submission
app.post('/booking', (req, res) => {
  const {
    tripType,
    serviceType,
    vehicleType,
    pickupDate,
    pickupTime,
    pickupLocation,
    dropoffLocation,
    passengers,
    luggage,
    fullName,
    email,
    phone,
    specialRequests
  } = req.body;

  console.log('📅 New Booking Submission:');
  console.log({
    tripType,
    serviceType,
    vehicleType,
    pickupDate,
    pickupTime,
    pickupLocation,
    dropoffLocation,
    passengers,
    luggage,
    fullName,
    email,
    phone,
    specialRequests
  });
  console.log('------------------------');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'astartravels.sg@gmail.com', // Change to your client email
    subject: `🚌 New Booking from ${fullName}`,
    text: `
A new booking has been submitted:

Trip Type: ${tripType}
Service Type: ${serviceType}
Vehicle Type: ${vehicleType}
Pickup Info: ${pickupLocation}, ${pickupDate} at ${pickupTime}
Drop-off Location: ${dropoffLocation}
Passengers: ${passengers}
Luggage: ${luggage}

Customer Info:
Name: ${fullName}
Email: ${email}
Phone: ${phone}

Special Requests:
${specialRequests}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email error (booking):', error);
      return res.status(500).json({ message: 'Failed to send booking email.' });
    }
    console.log('📧 Booking Email sent:', info.response);
    res.status(200).json({ message: '✅ Booking email sent successfully!' });
  });
});

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
