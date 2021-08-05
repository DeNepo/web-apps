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

const URL = 'https://pokeapi.co/api/v2/pokemon/20';

(async () => {
  try {
    log('fetching ' + URL + ' ...');
    const dotDotDot = setInterval(() => log('...'), 100);
    const res = await nodeFetch(URL);
    clearInterval(dotDotDot);

    log('testing response ...');
    assert.strictEqual(res.ok, true);
    assert.strictEqual(res.status, 200);

    log('parsing response ...');
    const data = await res.json();

    log('testing data ...');
    assert.strictEqual(data.name, 'raticate');
    assert.strictEqual(data.id, 20);
    assert.strictEqual(data.height, 7);
    assert.deepStrictEqual(data.abilities[2], {
      ability: {
        name: 'run-away',
        url: 'https://pokeapi.co/api/v2/ability/50/',
      },
      is_hidden: false,
      slot: 1,
    });

    log('... PASS!');
  } catch (err) {
    log(err.stack);
  }
})();
