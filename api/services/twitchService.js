const config = require('config');

async function getUserInfo(userName) {
	const clientId = process.env.TWITCH_CLIENT_ID;
	const clientSecret = process.env.TWITCH_CLIENT_SECRET;

	const authUrl = config
		.get('TWITCH_AUTH_URL')
		.replace('##CLIENT_ID##', clientId)
		.replace('##CLIENT_SECRET##', clientSecret);

	const responseToken = await fetch(authUrl, { method: 'POST' });
	const dataToken = await responseToken.json();
	const token = dataToken.access_token;

	const responseInfo = await fetch(
		`${config.get('TWITCH_QUERY_URL')}${userName}`,
		{
			headers: { Authorization: `Bearer ${token}`, 'Client-ID': clientId }
		}
	);
	const dataInfo = await responseInfo.json();

	const userInfo = dataInfo.data.filter(
		(user) => user.broadcaster_login.toLowerCase() === userName.toLowerCase()
	)[0];
	return userInfo;
}

module.exports = {
	getUserInfo
};
