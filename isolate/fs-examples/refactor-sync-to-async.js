// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();
const FILE_PATH = __dirname + '/file.txt';

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value,
);

// -- main script --
debugger;

// synchronous

const newSyncFileContents = '*[]*';
log(1, newSyncFileContents);

fs.writeFileSync(FILE_PATH, newSyncFileContents);

const currentFileContents = fs.readFileSync(FILE_PATH, 'utf-8');
log(2, currentFileContents);


// asynchronous

const newAsyncFileContents = '[**]';
log(3, newAsyncFileContents);

fs.writeFile(FILE_PATH, newAsyncFileContents, (err) => {
  if (err) {
    log(5, err);
    return;
  }

  fs.readFile(FILE_PATH, 'utf-8', (err, asyncFileContents) => {
    if (err) {
      log(6, err);
      return;
    }

    log(6, asyncFileContents);
  });
  log(5, 'reading file ...');
});

log(4, 'writing file ...');

