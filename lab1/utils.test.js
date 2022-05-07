const { array_inludes_obj, string_inludes_word, array_get_obj, array_inludes_cb, phrase_to_words_arr, person } = require('./utils');

describe('utils_test', () => {
	beforeAll(() => {
		this.test_array = [-8, -2, 0, 11, 5, 7];
		this.test_negative_array = [-8, -2];
		this.test_positive_array = [11, 5, 7];
	});

	test('array_inludes_obj', () => {
		const a = { name: 'a' };
		const b = { name: 'b' };
		const arr = [a, b];

		expect(array_inludes_obj(arr, a)).toBeTruthy();
	});

	test('string_inludes_word', () => {
		const str = 'Hello world!!!';
		expect(string_inludes_word(str, 'world')).toBeTruthy();
	});

	test('array_get_obj', () => {
		const a = { name: 'a' };
		const b = { name: 'b' };
		const arr = [a, b];
		expect(array_get_obj(arr, b).name).toBeDefined();
	});

	test('test1', () => {
		const mockFn = jest.fn(() => false);
		array_inludes_cb(this.test_array, mockFn);
		expect(mockFn).toHaveBeenCalledTimes(this.test_array.length);
	});

	test('test2', () => {
		const str = 'Hello world';
		const expectedArr = ['Hello', 'world'];
		const mockFn = jest.fn((wordsArr) => {
			expect(wordsArr).toStrictEqual(expectedArr);
		});
		phrase_to_words_arr(str, mockFn)
	});

	test('test3', () => {
		const person1 = { ...person };
		person1.firstname = 'Petro';
		person1.lastname = 'Petrenko';
		const spy = jest.spyOn(person1, 'introduce');

		person1.introduce();
		person1.introduce();
		expect(spy).toHaveBeenCalledTimes(2);
	});
});

