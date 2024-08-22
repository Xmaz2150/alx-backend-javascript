const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('validates the usage of the Utils.calculateNumber function', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    Utils.calculateNumber('SUM', 100, 20);
    assert(spy.calledWith('SUM', 100, 20));
    spy.restore();
  });
});