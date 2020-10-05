// require dependencies
const fs = require(`fs`);
const path = require(`path`);
const util = require('util');
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

// --- refactored to promises ---
// finally, something easy to think about!

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const newFileContents = 'written by example with async/await';
log(1, newFileContents);

const writeReadAssert = async (toWrite) => {
  try {
    log(2, 'writing file ...');
    await writeFilePromise(FILE_PATH, toWrite);

    log(3, 'reading file ...');
    const fileContent = await readFilePromise(FILE_PATH, 'utf-8');

    log(4, 'asserting ...');
    assert.strictEqual(fileContent, newFileContents);

    log(5, '\033[32mpass!\x1b[0m');
    // you don't need to refactor this line
    fs.appendFileSync(__filename, `\n// pass: ${(new Date()).toLocaleString()}`);

  } catch (err) {
    console.error(err);
  };
};
writeReadAssert(newFileContents);

// pass: 10/5/2020, 6:07:44 PM
