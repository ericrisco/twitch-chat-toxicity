import { useRef } from 'react';
import ChatMessage from '@components/ChatMessage';

export default function ChatMessages({ messages }) {
	const scrollable = useRef(null);

	if (scrollable.current != null) {
		scrollable.current.lastElementChild.scrollIntoView();
	}

	return (
		<div id="chat" className="w-full h-[700px] overflow-y-auto p-2 relative">
			<ul ref={scrollable}>
				{messages &&
					messages.map((message, index) => (
						<ChatMessage
							key={index}
							userName={message.userName}
							message={message.message}
							color={message.color}></ChatMessage>
					))}
			</ul>
		</div>
	);
}
