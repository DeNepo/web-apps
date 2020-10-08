'use strict'

const fs = require('fs')

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');

const FILE_DIR = `${__dirname}/files`

const app = express();

app.use(logger);
app.use(bodyParser.json());

app.use(function(req, res, next) {

  next()
})

app.use('/list', (req, res, next) => {

  fs.readdir(FILE_DIR, (err, data) => {

    if (err) {
      next(err)
      return
    }

    console.log('this is the directory listing', data)
    res.json(data)
  })
})

app.post('/create', (req, res, next) => {

  const name = req.query.name

  // check if file already exists

  const content = req.body.fileContent

  fs.writeFile(`${FILE_DIR}/${name}`, content, (err) => {

    if (err) {
      next(err)
      return
    }

    res.sendStatus(200);
  })
})

app.use(function(err, req, res, next) {

  console.error(err)
  res.status(500).send("something went wrong")
})

app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
);
