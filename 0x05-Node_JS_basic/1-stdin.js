const displayMessage = require('./0-console');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  displayMessage(`Your name is: ${data}`);
  process.exit();
});
