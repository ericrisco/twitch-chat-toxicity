import ChatHeader from '@components/ChatHeader';
import ChatMessages from '@components/ChatMessages';
import Loading from '@components/Loading';

import chatMessages from '@hooks/chatMessages';

export default function Chat({ userName }) {
	const { messages, chatConnected, classified } = chatMessages({ userName });

	if (chatConnected) {
		return (
			<div className="w-full h-screen flex flex-col bg-[#f5f6fa] dark:bg-gray-800">
				<ChatHeader userName={userName} classified={classified}></ChatHeader>
				<ChatMessages messages={messages}></ChatMessages>
			</div>
		);
	} else {
		return (
			<div className="w-full h-screen flex flex-col bg-[#f5f6fa] dark:bg-gray-800">
				<ChatHeader userName={userName}></ChatHeader>
				<Loading></Loading>
			</div>
		);
	}
}
