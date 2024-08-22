const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  it('validates the usage of the sendPaymentRequestToApi function', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('validates sendPaymentRequestToApi is called once', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
  });

  it('validates sendPaymentRequestToApi logs correct message', function() {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    console.log.restore();
  });

  afterEach(() => {
    spy.restore();
  });
});