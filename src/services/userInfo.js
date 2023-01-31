import { apiURL } from './config';

export async function getUserInfo(userName) {
	const response = await fetch(`${apiURL}/userinfo?userName=${userName}`);
	const data = await response.json();
	return data;
}
