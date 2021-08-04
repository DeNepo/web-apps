'use strict'

const express = require('express');

const routes = require('./routes');

const app = express();

// add routes to the app

app.listen(
  3000,
  () => {
    console.log(`Example app listening at http://localhost:3000`);
  }
)
