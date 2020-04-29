// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();
const NOW = () => `${Date.now() - START} ms. `;
const FILE_PATH = __dirname + '/file.json';

console.log(NOW(), FILE_PATH);

