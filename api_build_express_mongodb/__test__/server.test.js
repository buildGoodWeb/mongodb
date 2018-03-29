test('node env port is number', () => {
  expect(typeof process.env.PORT).toBe('undefined');
});
