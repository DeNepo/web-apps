const handlers = require('./handlers.js');
const express = require('express');

const router = express.Router();

router.get('/fruit', handlers.readAll);
router.get('/fruit/:id', handlers.readOne);
router.post('/fruit', handlers.create);
router.put('/fruit/:id', handlers.update);
router.delete('/fruit/:id', handlers.delete);

module.exports = router;
