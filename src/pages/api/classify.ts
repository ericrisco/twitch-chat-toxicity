/* eslint-disable no-undef */
import { cohereClassifyEndpoint, cohereApiKey } from './config';

export async function post({ request }) {
	try {
		const body = await request.json();
		const message = body.message;

		const postBody = {
			model: 'cd53e022-6e0a-44a6-b3c2-042630ab37b7-ft',
			inputs: [message]
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${cohereApiKey}`
			},
			body: JSON.stringify(postBody)
		};

		const response = await fetch(cohereClassifyEndpoint, options);
		const data = await response.json();

		if (
			data == null ||
			data.classifications == null ||
			data.classifications.length === 0
		) {
			throw new Error('Cohere is not returning a valid result...');
		}

		const classification = data.classifications[0];
		const json = {
			isToxic: classification.prediction !== 'benign',
			confidence: classification.confidence,
			severity:
				classification.confidence > 0.9
					? 'hight'
					: classification.confidence > 0.75
					? 'medium'
					: 'low'
		};

		return new Response(JSON.stringify(json), { status: 200 });
	} catch (e) {
		return new Response(JSON.stringify({ error: e.message }), { status: 503 });
	}
}
