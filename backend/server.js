require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import Routes
const chatRoutes = require('./src/routes/chatRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Jadikan folder uploads sebagai static folder agar bisa diakses browser
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Daftarkan Routes
app.use('/api/chat', chatRoutes);

// Jalankan Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend ChefBot berjalan di http://localhost:${PORT}`);
});