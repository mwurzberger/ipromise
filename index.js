module.exports.resolvingPromise = () => {
	return Promise.resolve({data: 'abc123'});
};

module.exports.rejectingPromise = () => {
	return Promise.reject(new Error('rejected error'));
};

module.exports.throwingPromiseBad = () => {
	const newNum = 10 / 2;
	throw new Error('thrown error');
	return Promise.resolve(newNum);
};

module.exports.throwingPromiseGood = () => {
	try {
		const newNum = 10 / 2;
		throw new Error('thrown error');
		return Promise.resolve(newNum);
	} catch (err) {
		return Promise.reject(err);
	}
};