const assert = require('assert');
const index = require('./index');

const promiseExpectedError = data => {
	assert.strictEqual(data, Symbol('Promise Rejection'), 'Expected error was not thrown');
};

describe('testing promises', () => {
	describe('resolvingPromise', () => {
		it('should resolve', () => {
			return index.resolvingPromise()
				.then(res => {
					assert.ok(res, 'expected resolve');
					assert.equal(res.data, 'abc123');
				})
				.catch(err => {
					assert.ok(false, 'catch triggered');
				});
		});
	});

	describe('rejectingPromise', () => {
		it('should reject', () => {
			return index.rejectingPromise()
				.then(promiseExpectedError)
				.catch(err => {
					assert.ok(err, 'expected reject');
					assert.ok(err instanceof Error, 'instanceof Error');
					assert.equal(err.message, 'rejected error');
				});
		});
	});

	describe('throwingPromiseBad', () => {
		it('should reject', () => {
			try {
				return index.throwingPromiseBad()
					.then(res => {
						assert.ok(false, 'promise should not return');
					})
					.catch(err => {
						assert.ok(false, 'promise should not reject');
					});
			} catch (err) {
				assert.ok(err, 'expected error');
				assert.ok(err instanceof Error, 'instanceof Error ');
				assert.equal(err.message, 'thrown error');
			}
		});
	});

	describe('throwingPromiseGood', () => {
		it('should reject', () => {
			return index.throwingPromiseGood()
				.then(promiseExpectedError)
				.catch(err => {
					assert.ok(err, 'expected error');
					assert.ok(err instanceof Error, 'instanceof Error ');
					assert.equal(err.message, 'thrown error');
				});

		});
	});
});
