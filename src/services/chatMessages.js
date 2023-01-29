import { useState, useEffect, useCallback, useRef } from 'react';
import Tmi from 'react-tmi';

const WINDOW_SIZE = 30;

const startMessage = {
	message: 'Welcome to the chat!',
	userName: 'TwitchToxicTracker'
};

export default function chatMessages({ userName }) {
	const [messages, setMessages] = useState([startMessage]);

	const client = useRef(
		new Tmi.Client({
			channels: [userName]
		})
	);

	const addMessage = useCallback((message) => {
		const newMessages = [
			...messages.slice(-WINDOW_SIZE),
			message
		];
		setMessages(newMessages);
	}, [messages]);

	useEffect(() => {
		client.current.connect();
		client.current.on('message', (channel, tags, message, self) => {
			console.log(messages);
			const newMessage = { message, userName: tags['display-name'] };
			if (messages.find(msg => msg.message === newMessage.message) === undefined) {
				addMessage(newMessage);
			}
		});
	}, [addMessage, client]);
	return messages;
}
