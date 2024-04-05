const caesarCipher = require('./cipher');

test('returns string shifted n number of times', () => {
  expect(caesarCipher("sphinx of black quartz judge my vow", 2)).toBe("urjkpz qh dncem swctvb lwfig oa xqy");
});

test('returns string shifted n number of times', () => {
    expect(caesarCipher("howdy, how are ya?", 3)).toBe("krzgb, krz duh bd?");
  });