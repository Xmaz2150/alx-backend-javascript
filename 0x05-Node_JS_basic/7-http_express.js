const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const file = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(file)
    .then((data) => {
      const resIntro = 'This is the list of our students';
      res.send([resIntro, data].join('\n'));
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(port, () => {
  console.log('Express server is up and running');
});

module.exports = app;
