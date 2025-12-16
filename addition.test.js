const calculerAddition = require('./addition');

test('calculerAddition', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});
