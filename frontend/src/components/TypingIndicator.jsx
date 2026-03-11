// src/components/TypingIndicator.jsx
export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-bl-sm flex items-center gap-2">
        <span className="w-2 h-2 bg-indigo-400/70 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-indigo-400/70 rounded-full animate-bounce delay-75"></span>
        <span className="w-2 h-2 bg-indigo-400/70 rounded-full animate-bounce delay-150"></span>
      </div>
    </div>
  );
}