const genAI = require('../config/gemini');
const { fileToGenerativePart } = require('../utils/fileHelper');

const getChefBotResponse = async (userMessage, uploadedFile) => {
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: "Kamu adalah ChefBot, asisten koki profesional yang ramah. Tugasmu memberikan resep, tips memasak, atau menganalisis bahan makanan dari gambar pengguna. Gunakan bahasa Indonesia yang santai."
  });

  const promptParts = [];
  if (userMessage) {
    promptParts.push(userMessage);
  } else if (uploadedFile) {
    promptParts.push("Tolong analisis bahan atau makanan apa ini, dan berikan ide resepnya.");
  }

  if (uploadedFile) {
    const filePart = fileToGenerativePart(uploadedFile.path, uploadedFile.mimetype);
    promptParts.push(filePart);
  }

  const result = await model.generateContent(promptParts);
  return result.response.text();
};

module.exports = { getChefBotResponse };