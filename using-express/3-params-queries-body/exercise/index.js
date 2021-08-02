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

// declare the routes
app.post('/param/:value', (req, res) => {
  // read value from the param
  _;

  console.log(`param value: ${paramValue}`);

  const responseData = {
    paramValue,
  };
  res.json(responseData);
});

app.post('/query', (req, res) => {
  // read value from the query
  _;

  console.log(`query value: ${queryValue}`);

  const responseData = {
    queryValue,
  };
  res.json(responseData);
});

app.post('/body', (req, res) => {
  // read value from the body
  _;

  console.log(`body value: ${bodyValue}`);

  const responseData = {
    bodyValue,
  };
  res.json(responseData);
});

// start the app
_;
