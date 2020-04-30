const fs = require('fs');

const sourceFile = __dirname + '/' + process.argv[2];
const targetFile = __dirname + '/' + process.argv[3];

const ifErrorCallback = (err) => {
  if (err) {
    console.error(err);
  };
};

fs.copyFile(sourceFile, targetFile, 0, ifErrorCallback);
