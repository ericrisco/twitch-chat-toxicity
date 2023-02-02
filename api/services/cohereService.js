const cohere = require('cohere-ai');

require('dotenv').config();
cohere.init(process.env.COHERE_API_KEY);
const dataset = require('../dataset/toxic_dataset.json');
const messages = dataset.map((message) => {
	return { text: message.text, label: message['Is this text toxic?'] };
});

async function classify(message) {
	const response = await cohere.classify({
		model: 'large',
		inputs: [message],
		examples: messages
	});

	if (response == null || response.body == null || response.body.classifications == null || response.body.classifications.length === 0) {
		return {};
	}

	const classification = response.body.classifications[0];
	const json = {
		isToxic: classification.prediction === 'Toxic',
		confidence: classification.confidence,
		toxicLevel: classification.confidence > 0.8 ? 'high' : classification.confidence > 0.5 ? 'medium' : 'low'
	};

	return json;
}

module.exports = {
	classify
};
