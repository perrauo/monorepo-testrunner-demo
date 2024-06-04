const assert = require('assert');
const { add } = require('../src');

describe('Package B Tests', () => {
  it('adds two numbers correctly', () => {
    assert.strictEqual(add(1, 2), 3);
  });
});
