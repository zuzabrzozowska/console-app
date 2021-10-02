const showStock = (total) => {
	console.log('In stock: ' + total);
};

const getOptionsStr = (options) => options.map((o) => (o === 'L' ? o : `${o}x`)).join(' or ');

const logInvalidInputError = (options) => {
	console.error(`Invalid input. Available inputs: ${getOptionsStr(options)}.`);
};

const sellItems = (amount, total) => {
	if (amount > total) {
		console.error(
			`You cannot sell ${amount} item${amount === 1 ? '' : 's'} if the current amount in stock is ${total}.`
		);
		return total;
	} else {
		return total - amount;
	}
};

const receiveItems = (amount, total) => {
	return total + amount;
};

const isDelivery = (string) => string === 'I';

const validate = (amount) => {
    if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
        return false
    }
    return true
}

const changeSaldo = (input, inStock, options) => {
	const amount = Number(input.substring(1));
	const delivery = isDelivery(input[0]);

	if (!validate(amount)) {
		logInvalidInputError(options);
		return inStock;
	}

	return delivery ? receiveItems(amount, inStock) : sellItems(amount, inStock);
};

module.exports.showStock = showStock;
module.exports.validate = validate;
module.exports.getOptionsStr = getOptionsStr;
module.exports.logInvalidInputError = logInvalidInputError;
module.exports.sellItems = sellItems;
module.exports.isDelivery = isDelivery;
module.exports.receiveItems = receiveItems;
module.exports.changeSaldo = changeSaldo;
