'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
app.use(bodyParser.raw({ type: 'text/plain' }));

app.get('/say-hello', (req, res) => {

  const name = req.query.name;
  const reply = `Hello ${name}! Your tree is ${req.query.tree}`;

  res.status(200)
    .send(reply);
})

app.get('/say-bye', (req, res) => {

  const name = req.query.name;
  const reply = `Bye ${name}!`;

  res.status(200)
    .send(reply);
})

app.post('/do-something', (req, res) => {

  const body = req.body.toString();

  console.log(body);
  res.sendStatus(200);
})

app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
);
