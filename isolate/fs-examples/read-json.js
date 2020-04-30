const fs = require('fs');

const filePath = __dirname + '/' + process.argv[2];

const callBack = (err, content) => {
  if (err) {
    throw err;
  } else {
    console.log(content);
    const parsedContent = JSON.parse(content);
    console.log(parsedContent);

    // parsing JSON is not the same as toString()ing it!
    console.log(typeof parsedContent);
    console.log(typeof content.toString())
  };
};

fs.readFile(filePath, callBack);
