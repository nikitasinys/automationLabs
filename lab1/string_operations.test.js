const { sum, sub, mul, div } = require('./math_operations');

function isPalindrom(str) {
	for (let idx1 = 0, idx2 = str.length - 1; idx1 < idx2; idx1++, idx2--) {
		const letter1 = str[idx1];
		const letter2 = str[idx2];
		let arr = [];

		if (letter1 !== letter2) {
			return false;
		}
	}
	return true;
}

function isAnagram(str1, str2) {
	if (str1 === str2) {
		return true;
	}

	let srt1Length = str1.length;
	let srt2Length = str2.length;

	if (srt1Length !== srt2Length) {
		return false;
	}

	var counts = {};

	for (let i = 0; i < srt1Length; i++) {
		let index = str1.charCodeAt(i) - 97;
		counts[index] = (counts[index] || 0) + 1;
	}

	for (let j = 0; j < srt2Length; j++) {
		let index = str2.charCodeAt(j) - 97;
		if (!counts[index]) {
			return false;
		}
		counts[index]--;
	}

	return true;
}

test('palindrom', () => {
	expect(isPalindrom('palap')).toBeTruthy();
});

test('anagram', () => {
	expect(isAnagram('abcd', 'dcab')).toBeTruthy();
});