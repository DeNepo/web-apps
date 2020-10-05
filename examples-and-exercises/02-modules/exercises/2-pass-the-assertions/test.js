// a built-in module
const assert = require('assert');

// a third-party module
const chalk = require('chalk');

// a module declared in local file
const keepTruthy = require('./keep-truthy.js');



const _1_expected = [-2, -1, 1, 2];
const _1_actual = keepTruthy([-2, -1, 0, 1, 2]);
assert.deepStrictEqual(_1_actual, _1_expected);
console.log(chalk.green('1. Pass'));

const _2_expected = [true, true];
const _2_actual = keepTruthy([false, true, false, true, false]);
assert.deepStrictEqual(_2_actual, _2_expected);
console.log(chalk.green('2. Pass'));

const _3_expected = [' '];
const _3_actual = keepTruthy(['', ' ', '']);
assert.deepStrictEqual(_3_actual, _3_expected);
console.log(chalk.green('3. Pass'));
