// require dependencies
const fs = require(`fs`);
const path = require(`path`);
const assert = require(`assert`);

// declare constants
const EXAMPLE_NAME = path.basename(__filename);
const FILE_PATH = path.join(__dirname, '../file-1.txt');
const START = Date.now();

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId} (${Date.now() - START} ms):\n`,
  value,
);


// --- main script ---
console.log(`\n--- ${EXAMPLE_NAME} ---`);

// --- old school with callbacks ---

const newFileContents = 'written by example with callbacks';
log(1, newFileContents);

const writeFileCallback = (err) => {
  if (err) {
    console.error(err);
    return;
  }

  const readFileCallback = (err, fileContent) => {
    if (err) {
      console.error(err);
      return;
    }
    log(4, 'asserting ...');
    assert.strictEqual(fileContent, newFileContents);
    log(5, '\033[32mpass!\x1b[0m');
    // you don't need to refactor this line
    fs.appendFileSync(__filename, `\n// pass: ${(new Date()).toLocaleString()}`);
  };

  log(3, 'reading file ...');
  fs.readFile(FILE_PATH, 'utf-8', readFileCallback);
};

log(2, 'writing file ...');
fs.writeFile(FILE_PATH, newFileContents, writeFileCallback);




// pass: 10/5/2020, 6:07:31 PM
