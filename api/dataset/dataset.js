const twitchService = require('./dataset.js');
const config = require('config');

function clearString(str) {
	return str.replace(/(\r\n|\n|\r)/gm, '');
}

function getDataset() {
	const dataset = require('./original_toxic_dataset.json');
	const toxics = dataset.filter(x => x['Is this text toxic?'] === 'Toxic').slice(0, config.SLICE_DATASET).map((message) => {
		return { text: message.text, label: 'toxic' };
	});
	const benignes = dataset.filter(x => x['Is this text toxic?'] === 'Not Toxic').slice(0, config.SLICE_DATASET).map((message) => {
		return { text: message.text, label: 'benigne' };
	});

	let messages = [];
	messages.push(toxics);
	messages.push(benignes);
	messages = messages.flat();

	return messages;
}

module.exports = {
	getDataset
};
