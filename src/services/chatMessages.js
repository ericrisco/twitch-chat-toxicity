import { useState, useEffect } from 'react';
import Tmi from 'react-tmi';
import { randomColors, windowSize } from './config.js';
import { classifyMessage } from './classifyMessage.js';

export default function chatMessages({ userName }) {
	let [messages, setMessages] = useState([]);
	const [chatConnected, setChatConnected] = useState(false);
	const [currentUserName, setCurrentUserName] = useState(userName);

	const client = new Tmi.Client({
		channels: [userName]
	});

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

			classifyMessage(message)
				.then((classified) => {
					setChatConnected(true);
					newMessage.classified = classified;
					if (notRepeated) {
						messages = [...messages.slice(-windowSize), newMessage];
					}
					setMessages(messages);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}, [messages]);

	return {
		messages,
		chatConnected
	};
}
