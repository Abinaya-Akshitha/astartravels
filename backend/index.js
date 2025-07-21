// Import required modules
const express = require('express');         // ✅ Express framework
const cors = require('cors');               // ✅ CORS to allow frontend

// Create Express app
const app = express();                      // ✅ Initialize express app
const PORT = 5000;                          // Server port

// ---------- MIDDLEWARE ----------
app.use(cors());                            // Allow cross-origin (frontend/backend)
app.use(express.json());                    // Parse incoming JSON

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
  const { name, email, date, details } = req.body;

  console.log('📅 New Booking Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Date:', date);
  console.log('Details:', details);
  console.log('------------------------');

  res.status(200).json({ message: '✅ Booking form received successfully!' });
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
