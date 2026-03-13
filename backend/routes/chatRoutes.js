const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { handleChat } = require('../controllers/chatController');

router.post('/', upload.single('file'), handleChat);

module.exports = router;