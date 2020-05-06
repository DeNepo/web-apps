'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/api/:value', (req, res) => {
  const paramValue = req.params.value;
  const bodyValue = req.body.value;

  console.log(`param value: ${paramValue}`);
  console.log(`body value: ${bodyValue}`);

  const responseData = {
    paramValue,
    bodyValue
  };
  res.json(responseData)
});

app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
)
