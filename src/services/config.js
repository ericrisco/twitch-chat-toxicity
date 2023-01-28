export const isDevelopment = import.meta.env.MODE !== 'production';
export const apiURL = isDevelopment
	? 'http://localhost:4000/api/twitch'
	: 'https://andocarbur.com/api/twitch';
