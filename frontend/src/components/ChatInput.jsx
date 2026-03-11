// src/components/ChatInput.jsx
export default function ChatInput({ 
  input, setInput, selectedFile, setSelectedFile, fileInputRef, isLoading, onSendMessage 
}) {

  return (
    <div className="p-4 bg-transparent border-t border-white/10">
      <div className="flex gap-3 items-end bg-white/5 p-2 rounded-3xl border border-white/10 focus-within:border-indigo-500/50 transition-colors">
        
        <label className="cursor-pointer p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" /></svg>
          <input type="file" className="hidden" ref={fileInputRef} onChange={(e) => setSelectedFile(e.target.files[0])} accept="image/*" />
        </label>

        <textarea 
          value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSendMessage(); } }}
          placeholder="Tanya resep atau analisis bahan..." 
          className="flex-1 bg-transparent text-white placeholder-gray-500 px-2 py-3 focus:outline-none resize-none max-h-25"
          rows={1}
        />
        
        <button 
          onClick={onSendMessage} 
          disabled={(!input.trim() && !selectedFile) || isLoading}
          className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-500 disabled:bg-white/10 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" /></svg>
        </button>
      </div>
    </div>
  );
}