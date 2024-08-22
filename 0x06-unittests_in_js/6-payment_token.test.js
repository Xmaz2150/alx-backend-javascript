const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('Promise response from API when true', async function() {
    const res = await getPaymentTokenFromAPI(true);
    expect(res).to.eql({data: 'Successful response from the API' });
    done();
  });
});