import { apiURL } from './config';

export async function getUserInfo(userName) {
	const json = JSON.stringify({ userName });

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: json
	};

	const response = await fetch(`${apiURL}twitch-user`, options);
	const data = await response.json();
	return data;
}
