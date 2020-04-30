const fs = require('fs');

const contentToAppend = process.argv[2] + '\n';

const ifErrorCallback = (err) => {
  if (err) {
    console.error(err);
  };
};

fs.appendFile(__dirname + '/file.txt', contentToAppend, ifErrorCallback);
