'use strict';

const express = require('express');

const api = require('./api');

const app = express();

app.use('/', api);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
