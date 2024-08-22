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

  it('returns the right content type', function() {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('returns status code 404', function() {
    request.get('http://localhost:7865/any', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
    });
  });

});

describe('Cart Page', function() {
  it('returns status code 200 with int', function() {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
  it('returns correct result', function() {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
    });
  });

  it('returns status code 404', function() {
    request.get('http://localhost:7865/cart/notNumber', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
    });
  });

  it('returns correnct result on wrong input', function() {
    request.get('http://localhost:7865/cart/notNumber', function(error, response, body) {
      expect(body).to.contain('Cannot GET /cart/notNumber');
    });
  });

  it('returns the right content type', function() {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });
});

describe('Login Page', function() {
  it('returns status code 200', function() {
    request.post('http://localhost:7865/login', { form: { userName: 'Betty' } }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('returns correct result', function() {
    request.post('http://localhost:7865/login', { form: { userName: 'Betty' } }, function(error, response, body) {
      expect(body).to.equal('Welcome Betty');
    });
  });

  it('returns the right content type', function() {
    request.post('http://localhost:7865/login', { form: { userName: 'Betty' } }, function(error, response, body) {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });
});

describe('Available Payments Page', function() {
  it('returns status code 200', function() {
    request.get('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('returns correct result', function() {
    request.get('http://localhost:7865/available_payments', function(error, response, body) {
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.equal(obj);
    });
  });

  it('returns the right content type', function() {
    request.get('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });
});