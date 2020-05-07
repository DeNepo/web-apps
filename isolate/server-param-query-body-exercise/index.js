'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');

// initialize the app
_;

// log requests
_;

// parse body
_;
// parse queries
_;

// statically serve the frontend
_;

app.post('/api/:value', (req, res) => {
  const paramValue = req.params.value;
  const queryValue = req.query.value;
  const bodyValue = req.body.value;

  console.log(`param value: ${paramValue}`);
  console.log(`query value: ${queryValue}`);
  console.log(`body value: ${bodyValue}`);

  const responseData = {
    paramValue,
    queryValue,
    bodyValue,
  };
  res.json(responseData);
});

// start the app
_;
