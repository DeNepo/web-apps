const fs = require('fs');
const path = require('path');
const config = require('../config');

const FILES_DIR = path.join(__dirname, '/..', config.FILES_DIR);

const handlers = {};

module.exports = handlers;
