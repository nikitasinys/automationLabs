
function array_sum(arr) {
	let sum = 0;
	arr.forEach(el => {
		sum += el;
	});
	return sum;
}

function array_pos_el(arr) {
	let positive_array = [];
	arr.forEach(el => {
		if (el > 0) {
			positive_array.push(el);
		}
	});
	return positive_array;
}

function array_neg_el(arr) {
	let negative_array = [];
	arr.forEach(el => {
		if (el < 0) {
			negative_array.push(el);
		}
	});
	return negative_array;
}

module.exports = { array_sum, array_pos_el, array_neg_el };
