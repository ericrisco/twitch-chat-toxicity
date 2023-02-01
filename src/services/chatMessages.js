import { useState, useEffect, useRef } from 'react';
import Tmi from 'react-tmi';
import { randomColors, startMessage, windowSize } from './config.js';

export default function chatMessages({ userName }) {
	let [messages, setMessages] = useState([startMessage]);
	const [chatConnected, setChatConnected] = useState(false);
	const [client, setClient] = useState(null);
	const [currentUserName, setCurrentUserName] = useState(userName);

	if (!client || client.channels.filter((e) => e === userName).length === 0) {
		setClient(new Tmi.Client({
			channels: [userName]
		}));
	}

	useEffect(() => {
		if (!chatConnected) {
			client.connect().catch((err) => {
				console.log(err);
			});
		}

		client.on('message', (channel, tags, message, self) => {
			if (self) return;
			const randomColor =
				randomColors[Math.floor(Math.random() * randomColors.length)];

			const newMessage = {
				message,
				userName: tags['display-name'],
				color: randomColor
			};

			const notRepeated =
				messages.filter(
					(e) => e.message === message && e.userName === newMessage.userName
				).length === 0;

			if (notRepeated) {
				messages = [...messages.slice(-windowSize), newMessage];
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
