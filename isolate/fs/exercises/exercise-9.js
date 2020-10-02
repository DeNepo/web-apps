/* reverse-engineering

  To understand what this exercise should do,
  practice using exercise-9-demo in the terminal

  your task is to reverse-engineer the behavior of the demo

  you'll know you've finished when it's impossible to tell
    if you're using the demo or your exercise
*/

// require dependencies
const fs = require('fs');

// declare constants
const START = Date.now();
const DOC_STRING = `
COMMANDS:

  list
    logs all of the file names in the current directory

  write <fileName> <text>
    writes the <text> the file with <fileName>

  append <fileName> <text>
    appends the <text> the file with <fileName>

FLAGS:

  -h
    print this helpful message
`;

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms. \n`,
  value
);


// --- main script ---

// fill in the _'s to reverse-engineer the behavior of exercise-9-demo.min.js

if (_) {
  _;
  _;
}

const command = _;
const fileName = _;
const text = _;

if (_) {
  _;
  _;
}
_;


if (_) {
  _;
};


if (_) {
  _;
  _;
}
_;


if (_) {
  _;
  _;
}
_;


if (_) {
  _;
  _;
  _;
  _;

} else if (_) {
  _;
  _;
  _;
  _;

} else {
  _;
}
