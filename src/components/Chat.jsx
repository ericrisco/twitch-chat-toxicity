import ChatHeader from '@components/ChatHeader';
import ChatMessages from '@components/ChatMessages';
import Loading from '@components/Loading';

import chatMessages from '@hooks/chatMessages';

export default function Chat({ userName }) {
	const { messages, chatConnected } = chatMessages({ userName });

	if (chatConnected) {
		return (
			<div className="w-full h-screen flex flex-col bg-[#f5f6fa]">
				<ChatHeader userName={userName}></ChatHeader>
				<ChatMessages messages={messages}></ChatMessages>
			</div>
		);
	} else {
		return (
			<div className="w-full h-screen flex flex-col bg-[#f5f6fa]">
				<ChatHeader userName={userName}></ChatHeader>
				<Loading></Loading>
			</div>
		);
	}
}
