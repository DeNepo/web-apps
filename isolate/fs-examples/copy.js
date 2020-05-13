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
debugger;

const sourceFile = __dirname + '/' + process.argv[2];
log(1, sourceFile);

const targetFile = __dirname + '/' + process.argv[3];
log(2, targetFile);

const ifErrorCallback = err => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, 'done!');
};

fs.copyFile(sourceFile, targetFile, 0, ifErrorCallback);

log(3, '...');
