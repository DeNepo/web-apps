'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const datefns = require('date-fns');

const config = require('./config');

const FILE_DIR = path.join(__dirname, config.FILES_DIR);

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const currentDatetime = new Date();

  const formattedDatetime = datefns.format(
    currentDatetime,
    'yyyy-MM-dd hh:mm:ss.SSS aaaa',
  );

  const method = req.method;
  const url = req.url;

  const coloredLogMessage = `[\x1b[34m${formattedDatetime}\x1b[0m] \x1b[31m${method}\x1b[0m ${url}`;
  const plainLogMessage = `[${formattedDatetime}] ${method} ${url}`;

  console.log(coloredLogMessage);

  fs.appendFile('request_logs.txt', `${plainLogMessage}\n`, (err) => {
    if (err) {
      console.log(err);
    }
  });

  next();
});

app.get('/', (req, res) => {
  res.send('home page!');
});

app.get('/api/list', (req, res, next) => {
  fs.readdir(FILE_DIR, (err, data) => {
    if (err) {
      next(err);
      return;
    }

    console.log('this is the directory listing', data);
    res.json(data);
  });
});

app.post('/api/create', (req, res, next) => {
  const name = req.query.name;

  // check if file already exists

  const content = req.body.fileContent;

  fs.writeFile(`${FILE_DIR}/${name}`, content, (err) => {
    if (err) {
      next(err);
      return;
    }

    res.sendStatus(200);
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('something went wrong');
});

app.listen(config.PORT, () => {
  console.log(
    `Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`,
  );
});
