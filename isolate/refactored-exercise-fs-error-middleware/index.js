'use strict'

const fs = require('fs')
const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error-handler');


const FILE_DIR = path.join(__dirname, config.FILES_DIR);

const app = express();

app.use(logger);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('home page!');
});

app.get('/api/list', (req, res, next) => {

  fs.readdir(FILE_DIR, (err, data) => {

    if (err) {
      next(err)
      return
    }

    console.log('this is the directory listing', data)
    res.json(data)
  })
})

app.post('/api/create', (req, res, next) => {

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

app.use(errorHandler)

app.listen(
  config.PORT,
  () => {
    console.log(`Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`);
  }
);
