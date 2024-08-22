const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('Promise response from API when true', async function() {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      expect(res).to.equal({data: 'Successful response from the API' });
    });
    done();
  });
});