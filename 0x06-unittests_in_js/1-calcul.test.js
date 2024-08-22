const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('float and float', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });

    it('float and float', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('small float and float', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('small float and float', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
    });
  });

  describe('DIVIDE', function() {
    it('small float and float', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('float and float', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    });

    it('float and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});