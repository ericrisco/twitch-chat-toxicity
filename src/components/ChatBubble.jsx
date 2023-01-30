export default function ChatBubble({ userName, message, color }) {
    const Username = (
        <span className='font-semibold' style={{ color }}>
            {userName}
        </span>
    );

	return (
		<li className="clearfix2">
			<div className="text-[14px] py-1 px-2 rounded hover:bg-gray-500/30 leading-6">
				<div className="inline-flex items-baseline">
					{Username}
				</div>
				<span className="ml-3 break-words">{message}</span>
			</div>
		</li>
	);
}
