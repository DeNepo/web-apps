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

router.get('/say-hello', controllers.sayHello);

router.get('/say-bye', controllers.sayBye);

router.post('/do-something', controllers.doSomething);

module.exports = router;
