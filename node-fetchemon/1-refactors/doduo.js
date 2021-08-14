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

const URL = 'https://pokeapi.co/api/v2/pokemon/84';

log('fetching ' + URL + ' ...');
nodeFetch(URL)
  .then((res) => {
    clearInterval(dotDotDot);

    log('testing response ...');
    assert.strictEqual(res.ok, true);
    assert.strictEqual(res.status, 200);

    log('parsing response ...');
    return res.json();
  })
  .then((data) => {
    log('testing data ...');
    assert.strictEqual(data.name, 'doduo');
    assert.strictEqual(data.weight, 392);
    assert.deepStrictEqual(data.held_items[0].item, {
      name: 'sharp-beak',
      url: 'https://pokeapi.co/api/v2/item/221/',
    });

    log('... PASS!');
  })
  .catch((err) => log(err.stack));

const dotDotDot = setInterval(() => log('...'), 100);
