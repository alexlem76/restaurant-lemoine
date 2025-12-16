const calculerAddition = require('./addition');

test('calculerAddition', () => {
  expect(calculerAddition(15, 3)).toBe(18);
});
