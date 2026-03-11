const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { handleChat } = require('../controllers/chatController');

// Endpoint: POST /api/chat
// Multer middleware akan memproses form-data sebelum masuk ke handleChat
router.post('/', upload.single('file'), handleChat);

module.exports = router;