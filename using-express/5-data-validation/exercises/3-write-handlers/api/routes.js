const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/fruit', controllers.readAll);
router.get('/fruit/:id', controllers.readOne);
router.post('/fruit', controllers.create);
router.put('/fruit/:id', controllers.update);
router.delete('/fruit/:id', controllers.delete);

module.exports = router;
