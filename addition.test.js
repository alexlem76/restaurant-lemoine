const calculerAddition = require('./addition');

test('calculerAddition for caisse 18', () => {
  expect(calculerAddition(15, 3)).toBe(18);
});

test('calculerAddition for caisse 20', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});

test('calculerAddition for caisse 22', () => {
  expect(calculerAddition(17, 5)).toBe(22);
});
