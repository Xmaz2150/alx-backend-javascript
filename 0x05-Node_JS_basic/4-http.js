const http = require('http');

const host = 'localhost';
const port = 1245;

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log('Server is up and running');
});