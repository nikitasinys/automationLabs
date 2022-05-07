const { sum, sub, mul, div } = require('./math_operations');

describe('math_operations_param_test', () => {
	test.each`
		a     |  b     |  res
		${0}  | ${-5}  | ${-5}
		${-2}  | ${0.2} | ${-1.8}
		${0.3} | ${0.3} |  ${0.6}
	`('sum $a+$b=$res', ({ a, b, res }) => {
		expect(sum(a, b)).toBe(res);
	})

	test.each`
		a       |  b     |  res
		${1.2}  | ${2}   | ${-0.8}
		${-2}   | ${0.2} | ${-2.2}
		${0.3}  | ${0.3} |  ${0}
	`('sub $a-$b=$res', ({ a, b, res }) => {
		expect(sub(a, b)).toBe(res);
	})

	test.each`
		a       |  b     |  res
		${2}    | ${3}   | ${6}
		${3}    | ${5}   | ${15}
		${-4}   | ${3}   | ${-12}
	`('mul $a*$b=$res', ({ a, b, res }) => {
		expect(mul(a, b)).toBe(res);
	})

	test.each`
		a       |  b     |  res
		${10}   | ${2}   | ${5}
		${-15}  | ${5}   | ${-3}
		${9}    | ${2}   | ${4.5}
	`('div $a/$b=$res', ({ a, b, res }) => {
		expect(div(a, b)).toBe(res);
	})
})