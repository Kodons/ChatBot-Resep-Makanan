// src/App.jsx
import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import ChatInput from './components/ChatInput';
import { sendChatMessage } from './services/api';

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Halo! Aku ChefBot 👨‍🍳. Mau cari resep atau kirim foto bahan masakanmu?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  
  const fileInputRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() && !selectedFile) return;

    // 1. Tambahkan pesan user ke UI
    const userMsg = { 
      text: input, sender: "user",
      fileUrl: selectedFile ? URL.createObjectURL(selectedFile) : null,
      fileType: selectedFile ? selectedFile.type : null,
      fileName: selectedFile ? selectedFile.name : null
    };
    
    setMessages((prev) => [...prev, userMsg]);
    
    // 2. Siapkan data untuk API
    const formData = new FormData();
    formData.append("message", input);
    if (selectedFile) formData.append("file", selectedFile);

    // 3. Reset input
    setInput("");
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    
    setIsLoading(true); 

    // 4. Panggil API terpisah
    try {
      const data = await sendChatMessage(formData);
      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Waduh, koneksi ke dapur terputus!", sender: "bot"}]);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    // 1. Kembalikan p-4 agar ada jarak aman di kiri, kanan, atas, dan bawah layar (tidak menempel tepi)
    // 2. Gunakan min-h-screen agar background hitam benar-benar menutupi seluruh layar
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 md:p-8 relative overflow-hidden font-sans text-gray-200">
      
      {/* Efek Cahaya Abstrak */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 3. Set h-[85vh] agar kartu UI selalu lebih pendek dari layar dan berada persis di tengah */}
      {/* 4. Gunakan rounded-3xl di semua ukuran layar agar sudutnya selalu melengkung */}
      <div className="w-full max-w-2xl mt-20 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 flex flex-col h-[85vh] relative z-10 overflow-hidden">
        
        <Header />

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={chatEndRef} />
        </div>

        <ChatInput 
          input={input} setInput={setInput}
          selectedFile={selectedFile} setSelectedFile={setSelectedFile}
          fileInputRef={fileInputRef}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
        />

      </div>
    </div>
  );
}