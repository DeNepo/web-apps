'use strict';

const { describe, it } = require('../../../describe-it.js');
const assert = require('assert');

const repeater = require('./repeater.js');

describe('repeater joins an array of strings into a single formatted list', () => {
  it('returns an empty string for 0 repeats', () => {
    const expected = '';
    const actual = repeater('howdy', 0);
    assert.strictEqual(actual, expected);
  });
  it('returns 4 newlines for an empty string repeated 5 times', () => {
    const expected = '\n\n\n\n';
    const actual = repeater('', 5);
    assert.strictEqual(actual, expected);
  });
  it('repeats text once', () => {
    const expected = 'spelling bee';
    const actual = repeater('spelling bee', 1);
    assert.strictEqual(actual, expected);
  });
  it('repeats text many times', () => {
    const expected = 'timly\ntimly\ntimly\ntimly\ntimly';
    const actual = repeater('timly', 5);
    assert.strictEqual(actual, expected);
  });
  it('throws an error if the first argument is not a string', () => {
    const shouldThrow = () => repeater(true, 0);
    const expected = new TypeError('text is not a string');
    assert.throws(shouldThrow, expected);
  });
  it('throws an error if the second argument is not a number', () => {
    const shouldThrow = () => repeater('a string!', true);
    const expected = new TypeError('repeats is not a number');
    assert.throws(shouldThrow, expected);
  });
  it('throws an error if the second argument is NaN', () => {
    const shouldThrow = () => repeater('a string!', NaN);
    const expected = new TypeError('repeats is NaN');
    assert.throws(shouldThrow, expected);
  });
});
