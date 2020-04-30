const fs = require('fs');

const filePath = __dirname + '/' + process.argv[2];
const newContent = process.argv[3];

const callBack = (err) => {
  if (err) {
    throw err;
  } else {
    console.log('done writing to ./' + process.argv[2]);
  };
};

fs.writeFile(filePath, newContent, callBack);
