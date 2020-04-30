const fs = require('fs');

const filePath = __dirname + '/' + process.argv[2];

// change this to any array or object and see what happens
const toStringify = {
  e: 3,
  moreThings: [
    { wolf: "cola" },
    'monkey?',
    true
  ]
};

const toWrite = JSON.stringify(toStringify, null, '  ');

const callBack = (err) => {
  if (err) {
    throw err;
  } else {
    console.log('done writing to ./' + process.argv[2]);
  };
};

fs.writeFile(filePath, toWrite, callBack);
