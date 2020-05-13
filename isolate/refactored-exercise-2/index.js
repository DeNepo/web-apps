// refactor this file to match the organization in refactored-example-*
//  the code works as it is now!
//  your goal is that it still works the same way after you refactor

'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// log to file
app.use(morgan('combined', {
  stream: fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
  )
}));
// log to console
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/api', (req, res) => {
  res.send('api!');
});

app.post('/api/param/:value', (req, res) => {
  const paramValue = req.params.value;

  console.log(`param value: ${paramValue}`);

  const responseData = {
    paramValue,
  };
  res.json(responseData);
});

app.post('/api/query', (req, res) => {
  const queryValue = req.query.value

  console.log(`query value: ${queryValue}`);

  const responseData = {
    queryValue,
  };
  res.json(responseData);
});

app.post('/api/body', (req, res) => {
  const bodyValue = req.body.value;

  console.log(`body value: ${bodyValue}`);

  const responseData = {
    bodyValue,
  };
  res.json(responseData);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).end();
});

app.listen(config.PORT, () => {
  console.log(
    `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});
