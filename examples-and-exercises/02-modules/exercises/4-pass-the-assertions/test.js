// a built-in module
const assert = require('assert');

// a third-party module
const chalk = require('chalk');

// a module declared in local file
const NameTag = require('./name-tag.js');


console.log('-- testing first instance ---');

const nameTag1 = new NameTag('Mand', 'Hello I am');

const _1a_expect = { name: 'Mand', greeting: 'Hello I am' };
const _1a_actual = nameTag1.state;
assert.deepStrictEqual(_1a_actual, _1a_expect);
console.log(chalk.green('1 a. Pass'));

const _1b_expect = 'Hello I am Mand';
const _1b_actual = nameTag1.introduction;
assert.deepStrictEqual(_1b_actual, _1b_expect);
console.log(chalk.green('1 b. Pass'));

nameTag1.name = 'Paulo';
const _1c_expect = 'Hello I am Paulo';
const _1c_actual = nameTag1.introduction;
assert.deepStrictEqual(_1c_actual, _1c_expect);
console.log(chalk.green('1 c. Pass'));



console.log('-- testing second instance ---');

const nameTag2 = new NameTag('*()*', 'Ahhhhgh');

const _2a_expect = { name: '*()*', greeting: 'Ahhhhgh' };
const _2a_actual = nameTag2.state;
assert.deepStrictEqual(_2a_actual, _2a_expect);
console.log(chalk.green('2 a. Pass'));

const _2b_expect = 'Ahhhhgh *()*';
const _2b_actual = nameTag2.introduction;
assert.deepStrictEqual(_2b_actual, _2b_expect);
console.log(chalk.green('2 b. Pass'));

nameTag2.name = 'WATER';
const _3c_expect = 'Ahhhhgh WATER';
const _3c_actual = nameTag2.introduction;
assert.deepStrictEqual(_3c_actual, _3c_expect);
console.log(chalk.green('2 c. Pass'));
