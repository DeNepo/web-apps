'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const config = require('./config');

// - setup -
const FILES_DIR = path.join(__dirname, config.FILES_DIR);
// create the express app
const app = express();

// - use middleware -
// allow Cross Origin Resource Sharing
app.use(cors());
// parse the body
app.use(bodyParser.json());

// https://github.com/expressjs/morgan#write-logs-to-a-file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
// and log to the console
app.use(morgan('dev'));

// statically serve the frontend
app.use('/', express.static(path.join(__dirname, 'client')));

// ------ refactor everything from here .....


app.get('/api/files', (req, res, next) => {
  fs.readdir(FILES_DIR, (err, list) => {
    if (err && err.code === 'ENOENT') {
      res.status(404).end();
      return;
    }
    if (err) {
      next(err);
      return;
    }

    res.json(list);
  });
});

// read a file
//  called by action: fetchAndLoadFile
app.get('/api/files/:name', (req, res, next) => {
  const fileName = req.params.name;
  fs.readFile(`${FILES_DIR}/${fileName}`, 'utf-8', (err, fileText) => {
    if (err && err.code === 'ENOENT') {
      res.status(404).end();
      return;
    }
    if (err) {
      next(err);
      return;
    }

    const responseData = {
      name: fileName,
      text: fileText,
    };
    res.json(responseData);
  });
});

// write a file
//  called by action: saveFile
app.post('/api/files/:name', (req, res, next) => {
  const fileName = req.params.name;
  const fileText = req.body.text;
  fs.writeFile(`${FILES_DIR}/${fileName}`, fileText, err => {
    if (err && err.code === 'ENOENT') {
      res.status(404).end();
      return;
    }
    if (err) {
      next(err);
      return;
    }

    // refactor hint:
    res.redirect(303, '/api/files');
    // handlers.getFiles(req, res, next);
  });
});

// delete a file
//  called by action: deleteFile
app.delete('/api/files/:name', (req, res, next) => {
  const fileName = req.params.name;
  fs.unlink(`${FILES_DIR}/${fileName}`, err => {
    if (err && err.code === 'ENOENT') {
      res.status(404).end();
      return;
    }
    if (err) {
      next(err);
      return;
    }

    // refactor hint:
    res.redirect(303, '/api/files');
    // handlers.getFiles(req, res, next);
  });
});

// ..... to here ------

// - error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).end();
});

// - open server -
app.listen(config.PORT, () => {
  console.log(
    `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});

