const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  it('validates the usage of the sendPaymentRequestToApi function', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});