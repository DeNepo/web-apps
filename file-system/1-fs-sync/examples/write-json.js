// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value,
);

// -- main script --
debugger;

const filePath = __dirname + '/' + process.argv[2];
log(1, filePath);

// change this value and see what happens
const toStringify = {
  e: 3,
  moreThings: [
    { wolf: "cola" },
    'monkey?',
    true
  ]
};
log(2, toStringify);

const toWrite = JSON.stringify(toStringify, null, '  ');
log(3, toWrite);


log(4, '...');
fs.writeFileSync(filePath, toWrite);

log(5, 'all done!');
