// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value,
);

// main script
const contentToAppend = process.argv[2] + '\n';
log(1, contentToAppend);

log(2, '...');
fs.appendFileSync(__dirname + '/file.txt', contentToAppend);

log(3, 'done!');
