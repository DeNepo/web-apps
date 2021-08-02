// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value,
);

// -- main script --
debugger;

const filePath = __dirname + '/' + process.argv[2];
log(1, filePath);

const newContent = process.argv[3];
log(2, newContent);

log(3, '...');
fs.writeFile(filePath, newContent);

log(4, 'all done!');
