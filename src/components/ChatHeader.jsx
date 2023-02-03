import { useEffect, useState } from 'react';
import { getUserInfo } from '@services/userInfo';

export default function ChatMessage({ userName }) {
	const [data, setData] = useState({
		isOnline: false,
		avatarUrl: '/favicon.svg',
		loading: true,
		error: null
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
			className="h-10 w-10 rounded-full object-cover border-2"
			style={{ borderColor: styleOnline }}
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
		<span className="flex ml-2" style={{ color: styleOnline }}>
			<svg height="12" width="12">
				<circle cx="6" cy="6" r="5" fill="currentColor" />
			</svg>
			<p className="px-1 text-[11px]">{data.isOnline ? 'Online' : 'Offline'}</p>
		</span>
	);

	const headerLoading = (
		<div className="flex items-center border-b border-gray-300 pl-3 py-3">
			<div className="flex items-center w-full space-x-2">
				<div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				<div className="h-6 w-[300px] bg-gray-300 rounded-full "></div>
			</div>
		</div>
	);

	const headerOk = (
		<div className="flex items-center border-b border-gray-300 pl-3 py-3">
			{Avatar}
			<span>
				{UserInfo}
				{UserStatus}
			</span>
		</div>
	);

	const headerError = (
		<div
			id="alert-border-2"
			className="flex p-2 mb-2 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
			role="alert">
			<svg
				className="flex-shrink-0 w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
					clipRule="evenodd"></path>
			</svg>
			<div className="ml-3 text-sm font-medium">{data.error}</div>
		</div>
	);

	return data.loading ? headerLoading : data.error ? headerError : headerOk;
}
