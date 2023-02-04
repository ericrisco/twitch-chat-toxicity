/* eslint-disable no-undef */
import { twitchAuthUrl, twitchQueryUrl, twitchClientId, twitchClientSecret } from './config';

export async function post({ request }) {
	try {
		const body = await request.json();
		const userName = body.userName;

		const authUrl = twitchAuthUrl
							.replace('{clientId}', twitchClientId)
							.replace('{clientSecret}', twitchClientSecret);

		const responseToken = await fetch(authUrl, { method: 'POST' });
		const dataToken = await responseToken.json();
		const token = dataToken.access_token;

		const responseInfo = await fetch(
			`${twitchQueryUrl}${userName}`,
			{
				headers: { Authorization: `Bearer ${token}`, 'Client-ID': twitchClientId }
			}
		);
		const dataInfo = await responseInfo.json();

		const userInfo = dataInfo.data.filter(
			(user) => user.broadcaster_login.toLowerCase() === userName.toLowerCase()
		)[0];

		if (!userInfo) throw new Error('User not found');

		const json = { isOnline: userInfo.is_live, avatarUrl: userInfo.thumbnail_url };
		return new Response(JSON.stringify(json), { status: 200 });
	} catch (e) {
		return new Response(JSON.stringify({ error: e.message }), { status: 503 });
	}
}
