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
app.post('/api/twitch/message', async (req, res) => {
	const response = await cohere.classify({
		model: 'large',
		inputs: [req.body.message],
		examples: messages
	});
	res.json({ response: response.body.classifications });
});

app.listen(port, async () =>
	console.log(`${appName} v3 listening on port ${port}`)
);
