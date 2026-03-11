const { GoogleGenerativeAI } = require('@google/generative-ai');

// Inisialisasi Gemini AI menggunakan API Key dari .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = genAI;