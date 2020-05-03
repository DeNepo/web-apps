/* helpful examples
  read-json.js
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
  flamingo: undefined,
  completed: true,
  render: function () {
    return this.todoText + ': ' + this.completed;
  }
};
log(1, objectToSave);

// https://javascript.info/json#json-stringify
const stringToSave = _._(_, _, _);
log(2, stringToSave);

// sync
log(3, 'writing file ...');
fs.writeFileSync(FILE_PATH, stringToSave);


const readFileCallback = (err, fileText) => {
  if (err) {
    log(5, err);
    return;
  }

  log(5, fileText);
  assert.strictEqual(fileText, stringToSave);

  const parsedFileContents = JSON.parse(fileText);
  log(6, parsedFileContents);
  assert.deepStrictEqual(parsedFileContents, _);

  log(7, 'pass!');
};

// async
fs.readFile(FILE_PATH, 'utf-8', readFileCallback);
log(4, 'reading file ...');

