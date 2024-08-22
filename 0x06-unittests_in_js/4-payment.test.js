const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;

  beforeEach(() => {
    /* stubs Utils.calculateNumber to always return 10 */
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  it('called with the two arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('called once with arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
  });

  it('console log with the correct sum parameter', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
    console.log.restore();
  });

  afterEach(() => {
    sinon.restore();
  });
});