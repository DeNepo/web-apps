const handlers = require('./handlers.js');
const express = require('express');

const router = express.Router();

router.get('/animals', handlers.readAll);
router.get('/animals/:id', handlers.readOne);
router.post('/animals', handlers.create);
router.put('/animals/:id', handlers.update);
router.delete('/animals/:id', handlers.delete);

module.exports = router;
