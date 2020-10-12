// a built-in module
const assert = require('assert');

// a third-party module
const chalk = require('chalk');

// a module declared in local file
const greet = require('./greet.js');



const _1_expected = 'hello ludo';
const _1_actual = greet('ludo');
assert.strictEqual(_1_actual, _1_expected);
console.log(chalk.green('1. Pass'));

const _2_expected = 'hello tom';
const _2_actual = greet('tom');
assert.strictEqual(_2_actual, _2_expected);
console.log(chalk.green('2. Pass'));

const _3_expected = 'hello sonia';
const _3_actual = greet('sonia');
assert.strictEqual(_3_actual, _3_expected);
console.log(chalk.green('3. Pass'));
