/* helpful examples
  read-text.js
  write-text.js
*/

// require dependencies
const assert = require('assert');
const fs = require('fs');

// declare constants
const START = Date.now();
const FILE_PATH = __dirname + '/file.json';

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value,
);

// --- main script ---

const objectToSave = {
  todoText: "1234",
  completed: true
};
log(1, objectToSave);

const stringToSave = _;
log(2, stringToSave);


log(3, 'writing file ...');

_;

log(4, 'reading file ...');
const fileText = _;

log(5, fileText);
assert.strictEqual(fileText, stringToSave);

const parsedFileContents = _;
log(6, parsedFileContents);
assert.deepStrictEqual(parsedFileContents, objectToSave);

log(7, '\033[32mpass!\x1b[0m');
