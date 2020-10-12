// require dependencies
const fs = require(`fs`);
const path = require(`path`);
const assert = require(`assert`);

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
const sourcePath = path.join(__dirname, fileName1);
log(1, sourcePath);

const fileName2 = process.argv[3];
const targetPath = path.join(__dirname, fileName2);
log(2, targetPath);

log(3, `reading original contents from ${fileName1} ...`);
fs.readFile(sourcePath, `utf-8`, (err, originalSourceContent) => {
  if (err) {
    console.error(err);
    return;
  }

  log(4, `copying to ${fileName2} ...`);
  fs.copyFile(sourcePath, targetPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    log(5, `reading ${fileName1} ...`);
    fs.readFile(sourcePath, `utf-8`, (err, sourceContent) => {
      if (err) {
        console.error(err);
        return;
      }

      log(6, `asserting ${fileName1} ...`);
      assert.strictEqual(sourceContent, originalSourceContent);

      log(7, `reading ${fileName2} ...`);
      fs.readFile(targetPath, `utf-8`, (err, targetContent) => {
        if (err) {
          console.error(err);
          return;
        }

        log(8, `asserting ${fileName2} ...`);
        assert.strictEqual(targetContent, originalSourceContent);

        log(9, '\033[32mpass!\x1b[0m');
        fs.appendFileSync(__filename, `\n// pass: ${(new Date()).toLocaleString()}`);
      });
    });

  });

});



