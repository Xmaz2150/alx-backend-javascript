const { expect } = require('chai');
const request = require('request');

describe('Index Page', function() {
  it('returns status code 200', function() {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('returns correct result', function() {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});