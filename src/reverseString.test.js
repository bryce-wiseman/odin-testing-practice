const reverseString = require('./reverseString');

test('returns string in reverse order', () => {
  expect(reverseString("hello")).toBe("olleh");
});