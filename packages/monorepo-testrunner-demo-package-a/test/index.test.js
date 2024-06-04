const assert = require('assert');
const { add } = require('../src');

describe('Package A Tests', () => {
  it('should correctly add two numbers', () => {
    assert.strictEqual(add(1, 2), 3);
  });
});