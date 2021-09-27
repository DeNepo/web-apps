const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/animals', controllers.readAll);
router.get('/animals/:id', controllers.readOne);
router.post('/animals', controllers.create);
router.put('/animals/:id', controllers.update);
router.delete('/animals/:id', controllers.delete);

module.exports = router;
