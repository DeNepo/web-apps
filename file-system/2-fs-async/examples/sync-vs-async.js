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

log(0, 'begin!');

fs.writeFileSync(FILE_PATH, '111111111111');

log(1, 'first write is finished');

const fsWriteCallback = (err) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, 'second write is finished');
};

fs.writeFile(FILE_PATH, '222222222222', fsWriteCallback);

const firstRead = fs.readFileSync(FILE_PATH, 'utf-8');

log(2, firstRead);

const fsReadCallback = (err, secondRead) => {
  if (err) {
    log(4, err);
    return;
  }

  log(4, secondRead);
};

fs.readFile(FILE_PATH, 'utf-8', fsReadCallback);


