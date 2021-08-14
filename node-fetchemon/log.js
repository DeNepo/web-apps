const fs = require('fs');

// define logging function
const log = (start, filePath) => (msg) => {
  const now = `${Date.now() - start} ms: `;
  console.log(now + msg);
  if (typeof msg === 'string') {
    const cleanedString = msg
      // remove special characters used to print assertion colors in terminal
      .replace(/\[31m|\[32m|\[39m/g, '')
      // remove the file path from error messages for privacy and readability
      .replace(new RegExp(__dirname, 'g'), ' [ ... ] ');
    fs.appendFileSync(filePath, now + cleanedString + '\n');
  } else {
    const stringifiedMsg = JSON.stringify(msg);
    fs.appendFileSync(filePath, now + stringifiedMsg + '\n');
  }
};

module.exports = log;
