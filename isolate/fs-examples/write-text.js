const fs = require('fs');

const filePath = __dirname + '/' + process.argv[2];
const newContent = process.argv[3];

const callBack = (err) => {
  if (err) {
    console.error(err);
  };
};

fs.writeFile(filePath, newContent, callBack);
