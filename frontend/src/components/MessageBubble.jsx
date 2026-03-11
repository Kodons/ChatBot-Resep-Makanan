// src/components/MessageBubble.jsx
import ReactMarkdown from 'react-markdown';

export default function MessageBubble({ msg }) {
    const isUser = msg.sender === 'user';

    const renderMedia = () => {
        if (!msg.fileUrl) return null;
        if (msg.fileType?.startsWith('image/')) {
            return <img src={msg.fileUrl} alt="upload preview" className="max-w-full h-48 object-cover mt-3 rounded-xl shadow-lg border border-white/10" />;
        }
        if (msg.fileType?.startsWith('audio/')) {
            return <audio controls src={msg.fileUrl} className="mt-2 w-full max-w-55 h-10" />;
        }
        return (
            <div className="mt-2 flex items-center gap-2 p-2 bg-black/10 rounded-lg">
                <span className="text-xl">📄</span>
                <span className="text-sm truncate max-w-37.5 font-medium">{msg.fileName || 'File terlampir'}</span>
            </div>
        );
    };

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-3xl max-w-[85%] leading-relaxed shadow-sm backdrop-blur-md ${isUser
                    ? 'bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-br-sm border border-indigo-400/30'
                    : 'bg-white/5 text-gray-200 rounded-bl-sm border border-white/10'
                }`}>

                {msg.text && (
                    !isUser ? (
                        <div className="prose prose-invert prose-sm max-w-none wrap-break-word">
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                    ) : (
                        <p className="whitespace-pre-wrap font-medium">{msg.text}</p>
                    )
                )}

                {renderMedia()}
            </div>
        </div>
    );
}