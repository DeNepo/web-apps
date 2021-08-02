const handlers = require('./handlers.js');
const express = require('express');

const router = express.Router();

router.get('/files', handlers.readAll);
router.get('/files/:id', handlers.readOne);
router.post('/files', handlers.create);
router.put('/files/:id', handlers.update);
router.delete('/files/:id', handlers.delete);

module.exports = router;
