import { useRef } from 'react';
import ChatMessage from '@components/ChatMessage';
import ChatPausedAlert from '@components/ChatPausedAlert';
import chatScrolling from '@hooks/chatScrolling';

export default function ChatMessages({ messages }) {
	const { chatBoxRef, followScroll, scrollToNewMessage } =
		chatScrolling(messages);

	return (
		<div id="chat" className="relative w-full">
			<div
				id="chat"
				className="w-full h-[92vh] overflow-auto dark:bg-gray-800"
				ref={chatBoxRef}>
				{messages &&
					messages.map((message, index) => (
						<ChatMessage key={index} message={message}></ChatMessage>
					))}
			</div>
			{!followScroll && (
				<ChatPausedAlert
					onClick={scrollToNewMessage}
					className="absolute inset-x-0 bottom-5 mx-auto"
				/>
			)}
		</div>
	);
}
