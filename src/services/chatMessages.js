import { useState, useEffect, useRef } from 'react';
import Tmi from 'react-tmi';

const WINDOW_SIZE = 30;

const startMessage = {
	message: 'Welcome to the chat!',
	userName: 'TwitchToxicTracker'
};

const randomColors = [
	'#3498db',
	'#2ecc71',
	'#9b59b6',
	'#f1c40f',
	'#e67e22',
	'#e74c3c'
];

export default function chatMessages({ userName }) {
	let [messages, setMessages] = useState([startMessage]);
	const [chatConnected, setChatConnected] = useState(false);

	const client = useRef(
		new Tmi.Client({
			channels: [userName]
		})
	);

	useEffect(() => {
		client.current.connect();
		client.current.on('message', (channel, tags, message, self) => {
			if (self) return;
			const randomColor =
				randomColors[Math.floor(Math.random() * randomColors.length)];
			const newMessage = {
				message,
				userName: tags['display-name'],
				color: randomColor
			};
			if (
				messages.filter(
					(e) => e.message === message && e.userName === newMessage.userName
				).length === 0
			) {
				messages = [...messages.slice(-WINDOW_SIZE), newMessage];
				setMessages(messages);
				setChatConnected(true);
			}
		});
	}, [messages]);

	return {
		messages,
		chatConnected
	};
}
