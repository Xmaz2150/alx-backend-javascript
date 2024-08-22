const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('float and float', function() {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    });

    it('float and float', function() {
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });
  });

  describe('SUBTRACT', function() {
    it('small float and float', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('small float and float', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
    });
  });

  describe('DIVIDE', function() {
    it('small float and float', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('float and float', function() {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('float and 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});