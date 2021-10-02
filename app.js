const prompt = require('prompt-sync')({ sigint: true });
const { showStock, changeSaldo, getOptionsStr, logInvalidInputError } = require('./helpers');

const keepGoing = true;
const options = [ 'L', 'S', 'I' ];
let inStock = 0;

while (keepGoing) {
	const input = prompt(`What do you need today - ${getOptionsStr(options)} ? → `);

	if (input === 'L') {
		showStock(inStock);
	} else if (input[0] === 'S' || input[0] === 'I') {
		inStock = changeSaldo(input, inStock, options);
	}

	if (!input[0] || !options.includes(input[0]) || (input[0] === 'L' && input.length > 1)) {
		logInvalidInputError(options);
	}
}
