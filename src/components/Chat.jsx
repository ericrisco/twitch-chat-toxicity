import { useRef } from 'react';

import ChatHeader from '@components/ChatHeader';
import ChatMessages from '@components/ChatMessages';
import Loading from '@components/Loading';

import chatMessages from '@services/chatMessages';

export default function Chatbox({ userName }) {
	const scrollable = useRef(null);
	const { messages, chatConnected } = chatMessages({ userName });

	if (scrollable.current != null) {
		scrollable.current.lastElementChild.scrollIntoView();
	}

	if (chatConnected) {
		return (
			<div className="w-full h-full bg-white">
				<ChatHeader userName={userName}></ChatHeader>
				<ChatMessages messages={messages}></ChatMessages>
			</div>
		);
	} else {
		return (
			<div className="w-full h-full bg-white">
				<ChatHeader userName={userName}></ChatHeader>
				<Loading></Loading>
			</div>
		);
	}
}
