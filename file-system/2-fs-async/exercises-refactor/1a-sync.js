// require dependencies
const fs = require('fs');
const path = require('path');
const assert = require('assert');

// declare constants
const EXERCISE_NAME = path.basename(__filename);
const START = Date.now();

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId} (${Date.now() - START} ms):\n`,
  value,
);


// --- main script ---
console.log(`\n--- ${EXERCISE_NAME} ---`);

const fileName1 = process.argv[2];
const filePath1 = path.join(__dirname, fileName1);
log(1, filePath1);

const fileName2 = process.argv[3];
const filePath2 = path.join(__dirname, fileName2);
log(2, filePath2);

const yourGuess = process.argv[4] === 'true'
  ? true
  : process.argv[4] === 'false'
    ? false
    : undefined;
log(3, yourGuess);

log(4, `reading ${fileName1} ...`);
const fileContents1 = fs.readFileSync(filePath1, 'utf-8');

log(5, `reading ${fileName2} ...`);
const fileContents2 = fs.readFileSync(filePath2, 'utf-8');

log(6, 'comparing file contents ...');
const expected = fileContents1 === fileContents2;

log(7, 'asserting your guess ...');
assert.strictEqual(yourGuess, expected);

log(8, '\033[32mpass!\x1b[0m');
fs.appendFileSync(__filename, `\n// pass: ${(new Date()).toLocaleString()}`);
