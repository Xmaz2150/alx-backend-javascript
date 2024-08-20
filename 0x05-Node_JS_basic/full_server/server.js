const express = require('express');
import route from './routes';

const app = express();
const port = 1245;

app.use(route);

app.listen(port, () => {
  console.log('Express server is up and running');
});

module.exports = app;
