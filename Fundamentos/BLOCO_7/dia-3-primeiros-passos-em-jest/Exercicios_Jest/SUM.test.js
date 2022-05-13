const { exportAllDeclaration } = require('@babel/types');
const {sum} = require('./sum');

describe ('The sum function', () => {
  it('returns 3 when sum(1,2)', () => {
    expect(sum(1,2)).toBe(3);
  });
});