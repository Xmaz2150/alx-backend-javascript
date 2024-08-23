const http = require('http');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;
const file = process.argv[2];

const requestListener = (req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents(file)
        .then((data) => {
          res.writeHead(200);
          res.end(['This is the list of our students', data].join('\n'));
        })
        .catch((error) => {
          res.end(error);
        });
      break;
    default:
      res.writeHead(404);
      res.end('Not found');
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log('Server is up and running');
});

module.exports = server;
