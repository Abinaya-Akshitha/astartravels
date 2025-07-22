// Import required modules
const express = require('express');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = 5000;

// ---------- MIDDLEWARE ----------
app.use(cors());
app.use(express.json());

// ---------- ROUTES ----------

// Root endpoint (test)
app.get('/', (req, res) => {
  res.send('✅ A-Star Travels Backend is running!');
});

// Contact form submission
app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log('📨 New Contact Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Subject:', subject);
  console.log('Message:', message);
  console.log('------------------------');

  res.status(200).json({ message: '✅ Contact form received successfully!' });
});

// Booking form submission
app.post('/booking', (req, res) => {
  const {
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
    specialRequests,
    tripType
  } = req.body;

  console.log('📅 New Booking Submission:');
  console.log('Trip Type:', tripType);
  console.log('Service Type:', serviceType);
  console.log('Vehicle Type:', vehicleType);
  console.log('Pickup Date:', pickupDate);
  console.log('Pickup Time:', pickupTime);
  console.log('Pickup Location:', pickupLocation);
  console.log('Drop-off Location:', dropoffLocation);
  console.log('Passengers:', passengers);
  console.log('Luggage:', luggage);
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Special Requests:', specialRequests);
  console.log('------------------------');

  res.status(200).json({ message: '✅ Booking form received successfully!' });
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
