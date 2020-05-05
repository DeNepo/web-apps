'use strict'

const express = require('express');

const app = express();
const port = 3000;

app.get('/say-hello', (req, res) => {

  const name = req.query.name
  const reply = `Hello ${name}!`

  res.status(200)
    .send(reply)
})

app.get('/say-bye', (req, res) => {

  const name = req.query.name
  const reply = `Bye ${name}!`

  res.status(200)
    .send(reply)
})

app.listen(
  port,
  () => {
    console.log(`Example app listening at http://localhost:${port}`);
  }
)
