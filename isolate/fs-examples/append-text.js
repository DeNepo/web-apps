const fs = require('fs');

const contentToAppend = process.argv[2] + '\n';

const ifErrorCallback = (err) => {
  if (err) {
    throw err;
  } else {
    console.log('done appending to ./' + process.argv[2]);
  };
};

fs.appendFile(__dirname + '/file.txt', contentToAppend, ifErrorCallback);
