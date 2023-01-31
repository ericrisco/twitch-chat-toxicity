// Imports
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const config = require('config');

const cohereService = require('./services/cohereService.js');
const twitchService = require('./services/twitchService.js');

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

// Routing
app.post('/api/twitch/classify', async (req, res) => {
	const message = req.body.message;
	const classified = await cohereService.classify(message);
	res.json(classified);
});

app.get('/api/twitch/userinfo', async (req, res) => {
	try {
		const userInfo = await twitchService.getUserInfo(req.query.userName);
		res.json({ isOnline: userInfo.is_live, avatarUrl: userInfo.thumbnail_url });
	} catch (err) {
		console.log(err);
		res.status(400).json({ isOnline: false, avatarUrl: '', error: err.toString() });
	}
});

app.listen(port, async () =>
	console.log(`${appName} v3 listening on port ${port}`)
);
