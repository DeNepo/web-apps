const handlers = require('./handlers');
const express = require('express');

// create the router
_;

router.use((req, res, next) => {
  console.log('routes!');
  next();
});

router.get('/', (req, res) => {
  res.send('routes!');
});

// write the routes!


// export the router
_;
