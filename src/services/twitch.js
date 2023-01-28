export const getMessagesFromTwitchUser = async (username) => {
	try {
		// eslint-disable-next-line no-undef
		const client = new tmi.Client({
			channels: [username]
		});
		client.connect();
		client.on('message', (channel, tags, message, self) => {
			console.log(`${tags['display-name']}: ${message}`);
		});
	} catch (e) {
		return [];
	}
};
