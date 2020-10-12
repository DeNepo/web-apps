// a built-in module
const assert = require('assert');

// a third-party module
const chalk = require('chalk');

// a module declared in local file
const incrementor = require('./incrementor.js');


const _1_expect = { value: 0, increment: 1 };
const _1_actual = incrementor.state;
assert.deepStrictEqual(_1_actual, _1_expect);
console.log(chalk.green('1. Pass'));

incrementor.up();
const _2_expect = 1;
const _2_actual = incrementor.count;
assert.deepStrictEqual(_2_actual, _2_expect);
console.log(chalk.green('2. Pass'));

incrementor.down();
incrementor.down();
const _3_expect = -1;
const _3_actual = incrementor.count;
assert.deepStrictEqual(_3_actual, _3_expect);
console.log(chalk.green('3. Pass'));

incrementor.step = 4;
incrementor.up();
const _4_expect = 3;
const _4_actual = incrementor.count;
assert.deepStrictEqual(_4_actual, _4_expect);
console.log(chalk.green('4. Pass'));

const _5_expect = { value: 3, increment: 4 };
const _5_actual = incrementor.state;
assert.deepStrictEqual(_5_actual, _5_expect);
console.log(chalk.green('5. Pass'));

