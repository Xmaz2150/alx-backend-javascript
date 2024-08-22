const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });
  it('validates the usage of the Utils.calculateNumber function', function() {
    Utils.calculateNumber('SUM', 100, 20);
    assert(spy.calledWith('SUM', 100, 20));
  });
});