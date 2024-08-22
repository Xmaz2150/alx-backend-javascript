const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  it('validates the usage of the Utils.calculateNumber function', function() {
    Utils.calculateNumber('SUM', 100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  afterEach(() => {
    spy.restore();
  });
});