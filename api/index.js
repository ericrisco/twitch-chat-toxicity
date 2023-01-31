// Imports
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const config = require('config');
const cohere = require('cohere-ai');
require('dotenv').config();

const dataset = require('./dataset/toxic_dataset.json');
const messages = dataset.map((message) => {
	return { text: message.text, label: message['Is this text toxic?'] };
});

// App configuration
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(
	morgan(
		'[:date[clf]]: :remote-addr ":user-agent" :method :url :status - :response-time ms'
	)
);
const appName = config.get('appName');
const port = config.get('server.port');
cohere.init(process.env.COHERE_API_KEY);

// Routing
app.post('/api/twitch/classify', async (req, res) => {
	const response = await cohere.classify({
		model: 'large',
		inputs: [req.body.message],
		examples: messages
	});
	res.json({ response: response.body.classifications });
});

app.get('/api/twitch/userinfo', async (req, res) => {
	try {
		const clientId = process.env.TWITCH_CLIENT_ID;
		const clientSecret = process.env.TWITCH_CLIENT_SECRET;

		const authUrl = config.get('TWITCH_AUTH_URL').replace('##CLIENT_ID##', clientId).replace('##CLIENT_SECRET##', clientSecret);
		const responseToken = await fetch(authUrl, { method: 'POST' });
		const dataToken = await responseToken.json();
		const token = dataToken.access_token;

		const responseInfo = await fetch(`${config.get('TWITCH_QUERY_URL')}${req.query.userName}`, {
			headers: { Authorization: `Bearer ${token}`, 'Client-ID': clientId }
		});
		const dataInfo = await responseInfo.json();

		const userInfo = dataInfo.data.filter((user) => user.broadcaster_login.toLowerCase() === req.query.userName.toLowerCase())[0];

		res.json({ isOnline: userInfo.is_live, avatarUrl: userInfo.thumbnail_url });
	} catch (err) {
		console.log(err);
		res.status(400).json({ isOnline: false, avatarUrl: '', error: err.toString() });
	}
});

app.listen(port, async () =>
	console.log(`${appName} v3 listening on port ${port}`)
);
