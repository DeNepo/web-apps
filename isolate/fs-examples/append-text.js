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
debugger;

const contentToAppend = process.argv[2] + '\n';
log(1, contentToAppend);

const ifErrorCallback = (err) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, 'done!');
};

fs.appendFile(__dirname + '/file.txt', contentToAppend, ifErrorCallback);

log(2, '...');
