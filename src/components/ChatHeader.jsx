export default function ChatMessage({ userName, avatarUrl, isOnline }) {
	const UserInfo = (
		<span>
			<img
				className="h-10 w-10 rounded-full object-cover"
				src={avatarUrl}
				alt={userName}
			/>
			<span className="block ml-2 font-bold text-base text-gray-600">
				{userName}
			</span>
		</span>
	);

	const UserStatus = (
		<span className="connected text-green-500 ml-2">
			<svg width="6" height="6">
				<circle cx="3" cy="3" r="3" fill="currentColor"></circle>
			</svg>
		</span>
	);

	return (
		<div className="flex items-center border-b border-gray-300 pl-3 py-3">
			{UserInfo}
			{UserStatus}
		</div>
	);
}
