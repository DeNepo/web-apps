// a built-in module
const assert = require('assert');

// an npm module
const chalk = require('chalk');

// a module you wrote
const greet = require('./greet.js');

// a utility function defined in your file
const test = (message = '', testCallback = () => { }) => {
  console.log(chalk.bold(`--- ${message} ---`));
  try {
    testCallback();
    console.log(chalk.green('pass'));
  } catch (err) {
    console.error(err);
  }
  console.log('');
}


// the main purpose of this file

test('it should greet ludo', () => {
  const expected = 'hello ludo';
  const actual = greet('ludo');
  assert.strictEqual(actual, expected);
});


test('it should greet tom', () => {
  const expected = 'hello tom';
  const actual = greet('tom');
  assert.strictEqual(actual, expected);
});

test('it should greet sonia', () => {
  const expected = 'hello sonya';
  const actual = greet('sonia');
  assert.strictEqual(actual, expected);
});
