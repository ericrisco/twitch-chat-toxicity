import { useEffect, useState } from 'react';
import { getUserInfo } from '@services/userInfo';

export default function ChatMessage({ userName }) {
	const [data, setData] = useState({
		isOnline: false,
		avatarUrl: '/favicon.svg'
	});
	const styleOnline = data.isOnline ? 'green' : 'red';

	useEffect(() => {
		const fetchData = async () => {
			const data = await getUserInfo(userName);
			setData(data);
		};
		fetchData();
	}, []);

	const Avatar = (
		<img
			className="h-10 w-10 rounded-full object-cover"
			src={data.avatarUrl}
			alt={userName}
		/>
	);

	const UserInfo = (
		<span className="block ml-2 font-bold text-base text-gray-600">
			{userName}
		</span>
	);

	const UserStatus = (
		<span className="ml-2" style={{ color: styleOnline }}>
			<svg width="6" height="6">
				<circle cx="3" cy="3" r="3" fill="currentColor"></circle>
			</svg>
		</span>
	);

	return (
		<div className="flex items-center border-b border-gray-300 pl-3 py-3">
			{Avatar}
			{UserInfo}
			{UserStatus}
		</div>
	);
}
