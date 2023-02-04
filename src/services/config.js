export const isDevelopment = import.meta.env.MODE !== 'production';
export const apiURL = isDevelopment
	? 'http://localhost:3000/api/'
	: 'https://twitch-chat-toxicity.vercel.app/';

export const windowSize = 30;

export const randomColors = [
	'#3498db',
	'#2ecc71',
	'#9b59b6',
	'#f1c40f',
	'#e67e22',
	'#e74c3c',
	'#5f27cd',
	'#ff9ff3',
	'#00d2d3',
	'#2e86de',
	'#A3CB38',
	'#1B1464'
];
