const capitalize = require('./capitalize');

test('returns string with first letter capitalized', () => {
  expect(capitalize("hello")).toBe("Hello");
});