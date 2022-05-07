const { array_sum, array_pos_el, array_neg_el } = require('./array_utils');

describe('array_utils_test', () => {
	beforeAll(() => {
		this.test_array = [-8, -2, 0, 11, 5, 7];
		this.test_negative_array = [-8, -2];
		this.test_positive_array = [11, 5, 7];
	});

	test('array_sum', () => {
		expect(array_sum(this.test_array)).toBe(13);
	});

	test('array_pos_el', () => {
		expect(array_pos_el(this.test_array)).toStrictEqual(this.test_positive_array);
	});

	test('array_neg_el', () => {
		expect(array_neg_el(this.test_array)).toStrictEqual(this.test_negative_array);
	});
})
