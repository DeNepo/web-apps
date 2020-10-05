// what happens when you run this file with these two cli args?
//  $ node read-text.js file.json
//  $ node read-text.js file.txt

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

const callBack = (err, content) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, content);
};

fs.readFile(filePath, 'utf-8', callBack);

log(2, '...');
