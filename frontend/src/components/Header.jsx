// src/components/Header.jsx
export default function Header() {
  return (
    <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          <span className="text-xl">✨</span>
        </div>
        <div>
          <h1 className="font-semibold text-lg tracking-wide text-white">ChefBot AI</h1>
          <p className="text-xs text-gray-400">Powered by Gemini 2.5</p>
        </div>
      </div>
    </div>
  );
}