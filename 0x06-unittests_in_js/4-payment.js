const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}