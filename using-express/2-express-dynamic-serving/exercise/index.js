'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');

// create the express app
_;

// log all requests
_;
// parse the HTTP body
_;

app.get('/', (req, res) => {
  const reply = `Welcome to the greeter!`;

  res.status(200).send(reply);
});

// GET: '/greeter/hi'
// response: status:200, "hello (query name), happy (query day)!"

// GET: '/greeter/bye'
// response: status:200, "good bye (query name), happy (query day)!"

// POST: '/greeter/hi'
// behavior: log "hello (body name), happy (body day)!"
// response: status:200

// POST: '/greeter/bye'
// behavior: log "good bye (body name), happy (body day)!"
// response: status:200

// start the server
_;
