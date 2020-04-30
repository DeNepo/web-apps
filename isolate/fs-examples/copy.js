const fs = require('fs');

const sourceFile = __dirname + '/' + process.argv[2];
const targetFile = __dirname + '/' + process.argv[3];

const ifErrorCallback = (err) => {
  if (err) {
    throw err;
  } else {
    console.log('done copying to ./' + process.argv[2] + ' to ./' + process.argv[3]);
  };
};

fs.copyFile(sourceFile, targetFile, 0, ifErrorCallback);
