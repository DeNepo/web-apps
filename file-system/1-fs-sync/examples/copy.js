// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();

// declare logging function
const log = (logId, value) =>
  console.log(
    `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
    value
  );

// -- main script --
const sourceFile = __dirname + '/' + process.argv[2];
log(1, sourceFile);

const targetFile = __dirname + '/' + process.argv[3];
log(2, targetFile);

log(3, '...');
fs.copyFileSync(sourceFile, targetFile, 0);

log(4, 'done!');
