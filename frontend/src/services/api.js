// src/services/api.js
export const sendChatMessage = async (formData) => {
  try {
    const res = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) throw new Error("Network response was not ok");
    return await res.json();
  } catch (error) {
    console.error("Error in API:", error);
    throw error;
  }
};