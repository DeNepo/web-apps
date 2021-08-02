const handlers = require('./handlers.js');
const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log('routes!');
  next();
});

router.get('/', (req, res) => {
  res.send('routes!');
});

router.get('/say-hello', handlers.sayHello);

router.get('/say-bye', handlers.sayBye);

router.post('/do-something', handlers.doSomething);

module.exports = router;
