const calculerAddition = require('./addition');

test('calculerAddition(15, 5) should return 20', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});
