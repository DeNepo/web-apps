const fs = require('fs');

const filePath = __dirname + '/' + process.argv[2];

const callBack = (err, content) => {
  if (err) {
    console.error(err);
  } else {
    console.log(content);
    const contentAsString = content.toString();
    console.log(contentAsString);
  };
};

fs.readFile(filePath, callBack);
