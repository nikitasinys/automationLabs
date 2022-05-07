
function array_inludes_obj(arr, obj) {
	return arr.includes(obj);
};

function array_inludes_cb(arr, predicate) {
	for (const el of arr) {
		if (predicate(el)) {
			return true;
		}
	}
	return false;
};

function string_inludes_word(str, word) {
	return str.includes(word);
};

function array_get_obj(arr, obj) {
	return arr[arr.indexOf(obj)];
};


function phrase_to_words_arr(str, cb /* = function (wordsArr) */) {
	const words = str.split(' ');
	cb(words);
};

const person = {
	firstname: '',
	lastname: '',
	introduce: function () {
		console.log(`Hello, I'm ${this.firstname} ${this.lastname}`)
	}
};

module.exports = { array_inludes_obj, string_inludes_word, array_get_obj, array_inludes_cb, phrase_to_words_arr, person };
