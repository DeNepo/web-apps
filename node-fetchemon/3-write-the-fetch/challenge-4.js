// require dependencies
const fs = require('fs');
const path = require('path');
const nodeFetch = require('node-fetch');
const assert = require('assert');

const logFactory = require('../log');

// declare constants
const START = Date.now();
const REPORT_FILE =
  __dirname + '/' + path.basename(__filename).replace('.js', '-report.txt');

// initialize logging function
const log = logFactory(START, REPORT_FILE);

// log when a user forces the script to exit
process.on('SIGINT', function onSIGINT() {
  log('Ctrl-C');
  process.exit(2);
});

// log uncaught errors
const handleError = (err) => {
  log(err);
  process.exit(1);
};
process.on('uncaughtException', handleError);
process.on('unhandledRejection', handleError);

// (re)initialize report file
fs.writeFileSync(REPORT_FILE, '');
log(new Date().toLocaleString());

// --- begin main script ---

// the pokemon who's previous evolution is "Meowth"
