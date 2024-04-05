const analyzeArray = require('./analyzeArray');

test('returns object containing certain values from array', () => {
  expect(analyzeArray([9, 7, 5, 3, 1])).toEqual({
    average: 5, 
    min: 1, 
    max: 9, 
    length: 5
  }); 
});