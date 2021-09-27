const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log('routes!');
  next();
});

router.get('/', (req, res) => {
  res.send('routes!');
});

router.post('/:value', controllers.readValues);

module.exports = router;
