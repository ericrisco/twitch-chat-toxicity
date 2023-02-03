const cohere = require('cohere-ai');
require('dotenv').config();
cohere.init(process.env.COHERE_API_KEY);

async function classify(message) {
	const response = await cohere.classify({
		model: 'e4a74d77-11f0-42ef-af96-2781f879bc1d-ft',
		inputs: [message]
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
		severity: classification.confidence > 0.90 ? 'hight' : classification.confidence > 0.75 ? 'medium' : 'low'
	};

	return json;
}

module.exports = {
	classify
};
