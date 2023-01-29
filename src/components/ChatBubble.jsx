export default function ChatBubble({ userName, message, className }) {
    const Username = (
        <span className="font-semibold">
            {username}
        </span>
    );

	return (
        <div className={`text-[14px] py-1 px-2 rounded hover:bg-gray-500/30 leading-6 ${className}`}>
            <div className="inline-flex items-baseline">
                {Username}
            </div>
            <span className="ml-3 break-words">{message}</span>
        </div>
	);
}
