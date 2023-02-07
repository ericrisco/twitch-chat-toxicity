import { useState, useEffect } from 'react';
import Tmi from 'react-tmi';
import { randomColors, windowSize } from './config.js';
import { classifyMessage } from './classifyMessage.js';

export default function chatMessages({ userName }) {
	let [messages, setMessages] = useState([]);
	const [chatConnected, setChatConnected] = useState(false);
	const [cohereDisconnected, setCohereDisconnected] = useState(false);
	let [classified, setClassified] = useState({
		benign: 0,
		hight: 0,
		medium: 0,
		low: 0
	});

	const client = new Tmi.Client({
		channels: [userName],
		connection: { secure: true, reconnect: true }
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
				.then((classification) => {
					setChatConnected(true);
					newMessage.classified = classification;
					if (notRepeated) {
						messages = [...messages.slice(-windowSize), newMessage];
					}
					setMessages(messages);
					setCohereDisconnected(classification.error !== undefined);

					classified = {
						benign: classification.isToxic
							? classified.benign
							: classified.benign + 1,
						hight:
							classification.isToxic && classification.severity === 'hight'
								? classified.hight + 1
								: classified.hight,
						medium:
							classification.isToxic && classification.severity === 'medium'
								? classified.medium + 1
								: classified.medium,
						low:
							classification.isToxic && classification.severity === 'low'
								? classified.low + 1
								: classified.low
					};
					setClassified(classified);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}, [messages]);

	return {
		messages,
		chatConnected,
		classified,
		cohereDisconnected
	};
}
