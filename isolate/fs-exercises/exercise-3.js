/* helpful examples
  read-text.js
  write-text.js
*/

// require dependencies
const fs = require("fs");
const assert = require("assert");

// declare constants
const START = Date.now();
const FILE_PATH = __dirname + "/file.txt";

// declare logging function
const log = (logId, value) =>
  console.log(
    `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
    value
  );

// --- main script ---

const newFileContents = "*[]*";
log(1, newFileContents);

const writeFileCallback = (err) => {
  if (err) {
    log(3, err);
    return;
  }

  const readFileCallback = (err, fileContent) => {
    if (err) {
      log(4, err);
      return;
    }

    assert.strictEqual(fileContent, newFileContents);
    log(4, "pass!");
  };

  fs.readFile(FILE_PATH, "utf-8", readFileCallback);
  log(3, "reading file ...");
};

fs.writeFile(FILE_PATH, newFileContents, writeFileCallback);
log(2, "writing file ...");
