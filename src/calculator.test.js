const calc = require('./calculator');

test('returns a + b', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('returns a - b', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('returns a * b', () => {
    expect(calc.multiply(3, 3)).toBe(9);
  });

  test('returns a / b', () => {
    expect(calc.divide(12, 3)).toBe(4);
  });