export default function returnHowManyArguments (...args) {
  let sum = 0;
  for (const arg in args) {
    sum++;
  }
  return sum;
}
