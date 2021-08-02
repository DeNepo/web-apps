'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
app.use(bodyParser.raw({ type: 'text/plain' }));

app.use(function(req, res, next) {

  if (!req.query.first || !req.query.second) {
    res.status(400)
      .send("Please enter both first and second numbers")
    return
  }

  const first = parseInt(req.query.first, 10);
  const second = parseInt(req.query.second, 10);

  if (isNaN(first) || isNaN(second)) {
    res.status(400)
      .send("Both inputs should be a number")
    return
  }

  req.first = first
  req.second = second

  next()
})

app.get('/add', function (req, res) {

  const reply = req.first + req.second;

  res.status(200)
    .send(reply.toString());
})

app.get('/sub', function (req, res) {

  const reply = req.first - req.second;

  res.status(200)
    .send(reply.toString());
});

app.get('/mult', (req, res) => {

  const reply = req.first * req.second;

  res.status(200)
    .send(reply.toString());
})

app.get('/div', (req, res) => {

  if (req.second === 0) {
    res.status(400)
      .send('Cannot divide by 0');
    return
  }

  const reply = req.first / req.second;

  res.status(200)
    .send(reply.toString());
})

app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
);
