/* helpful examples
  read-json.js
  write-json.js
  sync-vs-async.js
*/

// require dependencies
const assert = require("assert");
const fs = require("fs");

// declare constants
const START = Date.now();
const FILE_PATH = __dirname + "/file.json";

// declare logging function
const log = (logId, value) =>
  console.log(
    `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
    value
  );

// --- main script ---

const objectToSave = {
  todoText: "1234",
  completed: true,
};
log(1, objectToSave);

const stringToSave = JSON.stringify(objectToSave, null, "  ");
log(2, stringToSave);

const writeFileCallback = (err) => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, "reading file ...");
  // sync
  const fileText = fs.readFileSync(FILE_PATH, "utf-8");

  log(5, fileText);
  assert.strictEqual(fileText, stringToSave);

  const parsedFileContents = JSON.parse(fileText);
  log(6, parsedFileContents);
  assert.deepStrictEqual(parsedFileContents, objectToSave);

  log(7, "pass!");
};

// async
fs.writeFile(FILE_PATH, stringToSave, writeFileCallback);
log(3, "writing file ...");
