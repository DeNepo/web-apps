'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'text/plain' }));

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/api/:value', (req, res) => {
  const paramValue = req.params.value;
  const queryValue = req.query.value;
  const bodyValue = req.body.value;

  console.log(`param value: ${paramValue}`);
  console.log(`query value: ${queryValue}`);
  console.log(`body value: ${bodyValue}`);

  const responseData = {
    paramValue,
    queryValue,
    bodyValue,
  };
  res.json(responseData);
});

app.listen(config.PORT, () => {
  console.log(
    `Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});
