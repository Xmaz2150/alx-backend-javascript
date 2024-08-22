const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('add int and int', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('add int and float', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('add float and float', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('add float and float', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
