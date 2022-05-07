const { sum, sub, mul, div } = require('./math_operations');

test('sum', () => {
  expect(sum(-1, 3)).toBe(2);
});

test('sub', () => {
  expect(sub(1.2, 2)).toBe(-0.8);
});

test('mul', () => {
  expect(mul(2, 3)).toBe(6);
});

test('div', () => {
  expect(div(10, 2)).toBe(5);
});