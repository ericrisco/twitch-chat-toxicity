const cohere = require('cohere-ai');

require('dotenv').config();
cohere.init(process.env.COHERE_API_KEY);

const dataset = require('../dataset/dataset.js');
const messages = dataset.getDataset();

async function classify(message) {
	const response = await cohere.classify({
		model: 'large',
		inputs: [message],
		examples: messages
	});

	if (
		response == null ||
		response.body == null ||
		response.body.classifications == null ||
		response.body.classifications.length === 0
	) {
		return {};
	}

	const classification = response.body.classifications[0];
	const json = {
		isToxic: classification.prediction !== 'benigne',
		confidence: classification.confidence,
		severity: classification.confidence > 0.85 ? 'hight' : classification.confidence > 0.5 ? 'medium' : 'low'
	};

	return json;
}

module.exports = {
	classify
};
