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

const FILES_DIR = path.join(__dirname, config.FILES_DIR);

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

// refactor these routes into /api
app.get('/api', (req, res) => {
  res.send('api!');
});

app.post('/api/param/:value', (req, res) => {
  const paramValue = req.params.value;

  console.log(`param value: ${paramValue}`);

  const fileName = 'param.txt';
  fs.writeFile(`${FILES_DIR}/${fileName}`, paramValue, err => {
    if (err && err.code === 'ENOENT') {
      console.log(err);
      res.status(404).end();
      return;
    }
    if (err) {
      console.log(err);
      next(err);
      return;
    }

    res.json({ message: `'${paramValue}' saved to ${fileName}` });
  });
});

app.post('/api/query', (req, res) => {
  const queryValue = req.query.value;

  console.log(`query value: ${queryValue}`);

  const fileName = 'query.txt';
  fs.writeFile(`${FILES_DIR}/${fileName}`, queryValue, err => {
    if (err && err.code === 'ENOENT') {
      console.log(err);
      res.status(404).end();
      return;
    }
    if (err) {
      console.log(err);
      next(err);
      return;
    }

    res.json({ message: `'${queryValue}' saved to ${fileName}` });
  });
});

app.post('/api/body', (req, res) => {
  const bodyValue = req.body.value;

  console.log(`body value: ${bodyValue}`);

  const fileName = 'body.txt';
  fs.writeFile(`${FILES_DIR}/${fileName}`, bodyValue, err => {
    if (err && err.code === 'ENOENT') {
      console.log(err);
      res.status(404).end();
      return;
    }
    if (err) {
      console.log(err);
      next(err);
      return;
    }

    res.json({ message: `'${bodyValue}' saved to ${fileName}` });
  });
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
