const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({data: 'Successful response from the API' });
  }
};

async function main() {
  getPaymentTokenFromAPI(true)
  .then((res) => {
    console.log(res);
  });
}

main();

module.exports = getPaymentTokenFromAPI;