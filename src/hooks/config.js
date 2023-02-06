export const isDevelopment = import.meta.env.MODE !== 'production';
export const apiURL = isDevelopment
	? 'http://localhost:3000/api/'
	: 'https://twitch-chat-toxicity.vercel.app/api/';

export const windowSize = 2000;

export const randomColors = [
	'#ED4C67',
	'#B53471',
	'#EE5A24',
	'#EA2027',
	'#C4E538',
	'#A3CB38',
	'#009432',
	'#006266',
	'#12CBC4',
	'#1289A7',
	'#0652DD',
	'#1B1464',
	'#FDA7DF',
	'#5758BB'
];
