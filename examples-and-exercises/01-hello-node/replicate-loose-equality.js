'use strict';

/**
 * compares primitive values according to the same rules as !=
 * see: https://dorey.github.io/JavaScript-Equality-Table/, https://eqeq.js.org/
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {boolean}
 */
function looseInequality(a, b) {

};

const _01_a = null;
const _01_b = undefined;
const _01_native = _01_a != _01_b;
const _01_copy = looseInequality(_01_a, _01_b);
console.assert(_01_copy === _01_native, 'Test 1');

const _02_a = null;
const _02_b = null;
const _02_native = _02_a != _02_b;
const _02_copy = looseInequality(_02_a, _02_b);
console.assert(_02_copy === _02_native, 'Test 2');

const _03_a = undefined;
const _03_b = undefined;
const _03_native = _03_a != _03_b;
const _03_copy = looseInequality(_03_a, _03_b);
console.assert(_03_copy === _03_native, 'Test 3');

const _04_a = true;
const _04_b = 1;
const _04_native = _04_a != _04_b;
const _04_copy = looseInequality(_04_a, _04_b);
console.assert(_04_copy === _04_native, 'Test 4');

const _05_a = true;
const _05_b = '1';
const _05_native = _05_a != _05_b;
const _05_copy = looseInequality(_05_a, _05_b);
console.assert(_05_copy === _05_native, 'Test 5');

const _06_a = false;
const _06_b = 0;
const _06_native = _06_a != _06_b;
const _06_copy = looseInequality(_06_a, _06_b);
console.assert(_06_copy === _06_native, 'Test 6');

const _07_a = false;
const _07_b = '0';
const _07_native = _07_a != _07_b;
const _07_copy = looseInequality(_07_a, _07_b);
console.assert(_07_copy === _07_native, 'Test 7');

const _08_a = 1.0;
const _08_b = '1';
const _08_native = _08_a != _08_b;
const _08_copy = looseInequality(_08_a, _08_b);
console.assert(_08_copy === _08_native, 'Test 8');

const _09_a = -18;
const _09_b = '-18.0';
const _09_native = _09_a != _09_b;
const _09_copy = looseInequality(_09_a, _09_b);
console.assert(_09_copy === _09_native, 'Test 9');

const _10_a = 0;
const _10_b = '';
const _10_native = _10_a != _10_b;
const _10_copy = looseInequality(_10_a, _10_b);
console.assert(_10_copy === _10_native, 'Test 10');

const _11_a = false;
const _11_b = '';
const _11_native = _11_a != _11_b;
const _11_copy = looseInequality(_11_a, _11_b);
console.assert(_11_copy === _11_native, 'Test 11');

const _12_a = null;
const _12_b = '';
const _12_native = _12_a != _12_b;
const _12_copy = looseInequality(_12_a, _12_b);
console.assert(_12_copy === _12_native, 'Test 12');

const _13_a = undefined;
const _13_b = false;
const _13_native = _13_a != _13_b;
const _13_copy = looseInequality(_13_a, _13_b);
console.assert(_13_copy === _13_native, 'Test 13');

const _14_a = true;
const _14_b = '-1';
const _14_native = _14_a != _14_b;
const _14_copy = looseInequality(_14_a, _14_b);
console.assert(_14_copy === _14_native, 'Test 14');

const _15_a = NaN;
const _15_b = 'any other value';
const _15_native = _15_a != _15_b;
const _15_copy = looseInequality(_15_a, _15_b);
console.assert(_15_copy === _15_native, 'Test 15');
