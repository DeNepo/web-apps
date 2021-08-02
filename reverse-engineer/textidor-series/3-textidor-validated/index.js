'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const api = require('./api');

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


app.use('/api', api);

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

