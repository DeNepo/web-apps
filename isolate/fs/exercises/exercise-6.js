/* helpful examples
  refactor-sync-to-async.js
  sync-vs-async.js
  read-text.js
  copy.js
*/

// require dependencies
const assert = require('assert');
const fs = require('fs');

// declare constants
const START = Date.now();
const SOURCE_PATH = __dirname + '/file.json';
const SOURCE_TEXT = fs.readFileSync(SOURCE_PATH, 'utf-8');

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value
);

// log initial values
log(0.1, SOURCE_PATH);
log(0.2, SOURCE_TEXT);

// --- main script ---


const targetFilePath = __dirname + '/' + process.argv[2];
log(1, targetFilePath)

// refactor the code below to be asynchronous

log(2, 'copying file ...');
fs.copyFileSync(SOURCE_PATH, targetFilePath);

log(3, 'reading target file ...');
const copiedContent = fs.readFileSync(targetFilePath, 'utf-8');

log(4, copiedContent);

assert.strictEqual(copiedContent, SOURCE_TEXT);
log(5, '\033[32mpass!\x1b[0m');
