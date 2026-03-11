const aiService = require('../services/aiService');

const handleChat = async (req, res) => {
  const userMessage = req.body.message || "";
  const uploadedFile = req.file; 
  
  let fileUrl = null;
  let fileType = null;

  try {
    // Siapkan URL file untuk dikembalikan ke frontend
    if (uploadedFile) {
      fileUrl = `http://localhost:3001/uploads/${uploadedFile.filename}`;
      fileType = uploadedFile.mimetype;
    }

    // Panggil Service AI
    const botReply = await aiService.getChefBotResponse(userMessage, uploadedFile);

    // Kirim balasan JSON
    res.json({ 
      reply: botReply,
      fileUrl: fileUrl,
      fileType: fileType
    });

  } catch (error) {
    console.error("Error di Chat Controller:", error);
    res.status(500).json({ 
      reply: "Waduh, dapur sedang sibuk atau ada masalah dengan koneksi AI! Coba lagi ya.",
    });
  }
};

module.exports = { handleChat };