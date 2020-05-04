// require dependencies
const fs = require("fs");

// declare constants
const START = Date.now();
const DOC_STRING = `
COMMANDS:

  list
    logs all of the file names in the current directory

  read <fileName>
    logs the contents of <fileName>

  unlink <fileName>
    removes <fileName> from the directory

FLAGS:

  -h
    print this helpful message
`;

// declare logging function
const log = (logId, value) =>
  console.log(`\nlog ${logId}, ${Date.now() - START} ms. \n`, value);

// --- main script ---

// fill in the _'s to reverse-engineer the behavior of exercise-8-demo.min.js

if (process.argv.includes("-h")) {
  log(0, DOC_STRING);
  process.exit(0);
}

const command = process.argv[2];
const fileName = process.argv[3];

if (command == null) {
  log("1.a", "a command is required, exiting");
  process.exit(0);
}
log("1.b", "command: " + command);

if (command === "list") {
  log("3", "reading filenames ...");
  const fileNames = fs.readdirSync(__dirname);
  log("4", fileNames);
  process.exit(0);
}

if ((command === "read" || command === "unlink") && process.argv[3] == null) {
  log("2.a", "a file name is required, exiting");
  process.exit(0);
}
log("2.b", "fileName: " + fileName);

if (command === "read") {
  log("3.a", "declaring reading file");
  const readCallback = (err, contents) => {
    if (err) {
      log(3, err);
      return;
    } else {
      log(contents);
    }
  };
  fs.readFile(__dirname + "/" + fileName, "utf-8", readCallback);
  log("4.a", "read contents from " + fileName + " ...");
} else if (command === "unlink") {
  log("3.b", "declaring unlink");
  const deleteCallBack = (err) => {
    if (err) {
      log(err);
      return;
    }
  };
  fs.unlink(__dirname + "/" + fileName, deleteCallBack);
  log("4.b", "delete" + fileName + " ...");
} else {
  log("3.c", "unknown command: " + command);
}
