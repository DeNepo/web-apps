// what happens when you run this file with these two cli args?
//  $ node read-json.js file.txt
//  $ node read-json.js file.json

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

const filePath = __dirname + '/' + process.argv[2];
log(1, filePath);


log(2, '...');

const content = fs.readFileSync(filePath, 'utf-8');

log(3, content);
const parsedContent = JSON.parse(content);
log(4, parsedContent);
