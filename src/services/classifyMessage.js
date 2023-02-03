import { apiURL } from './config';

export async function classifyMessage(message) {
	const json = JSON.stringify({ message });

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: json
	};

	const response = await fetch(`${apiURL}/classify`, options);
	const data = await response.json();
	return data;
}
