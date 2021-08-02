/* helpful examples
  read-json.js
  write-json.js
  sync-vs-async.js
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
  value
);

// --- main script ---

const objectToSave = {
  todoText: "1234",
  completed: true
};
log(1, objectToSave);

const stringToSave = JSON.stringify(objectToSave, null, '  ');
log(2, stringToSave);

// sync
log(3, 'writing file ...');
fs.writeFileSync(FILE_PATH, stringToSave);


const fileContents = fs.readFileSync(FILE_PATH, 'utf-8');

log(5, fileText);
assert.strictEqual(_, stringToSave);

const parsedFileContents = JSON.parse(_);
log(6, parsedFileContents);
assert.deepStrictEqual(parsedFileContents, objectToSave);

log(7, '\033[32mpass!\x1b[0m');
