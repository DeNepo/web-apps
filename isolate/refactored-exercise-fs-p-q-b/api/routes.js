const handlers = require('./handlers.js');
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



module.exports = router;
