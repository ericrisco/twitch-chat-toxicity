export default function ChatMessage({ message }) {
	let classColor = '';
	if (message.classified.isToxic) {
		switch (message.classified.toxicLevel) {
			case 'hight':
				classColor = 'bg-[#e74c3c]';
				break;
			case 'medium':
				classColor = 'bg-[#e67e22]';
				break;
			default:
				classColor = 'bg-[#f1c40f]';
				break;
		}
	}

	const ToxicIcon = (
		<p className="text-[16px]">
			{
				message.classified.isToxic
				? <span>☣️</span>
				: <span>✔️</span>
			}
		</p>
	);

	const Username = (
		<span className="font-semibold" style={{ color: message.color }}>
			{message.userName}
		</span>
	);

	return (
		<li className="clearfix2">
			<div className={`text-[14px] py-1 px-2 rounded hover:bg-gray-500/30 leading-6 ${classColor}`}>
				<div className="inline-flex items-baseline">{ToxicIcon}</div>
				<div className="pl-2 inline-flex items-baseline">{Username}</div>
				<span className="ml-3 break-words">{message.message}</span>
			</div>
		</li>
	);
}
