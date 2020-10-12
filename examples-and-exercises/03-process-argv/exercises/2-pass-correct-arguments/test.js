'use strict';

const { describe, it } = require('../../../describe-it.js');
const assert = require('assert');

const listify = require('./listify.js');

describe('listify joins an array of strings into a single formatted list', () => {
  it('returns an empty string for an empty array', () => {
    const expected = '';
    const actual = listify([]);
    assert.strictEqual(actual, expected);
  });
  it('can create lists with one item', () => {
    const expected = '- toad';
    const actual = listify(['toad']);
    assert.strictEqual(actual, expected);
  });
  it('can create lists with many items', () => {
    const expected = '- gorgeous\n- spiced\n- potato';
    const actual = listify(['gorgeous', 'spiced', 'potato']);
    assert.strictEqual(actual, expected);
  });
  it('throws an error if the argument is not an array', () => {
    const shouldThrow = () => listify('not an array');
    const expected = new TypeError('arrOfStrings is not an array');
    assert.throws(shouldThrow, expected);
  });
  it('throws an error if the array contains non-strings', () => {
    const shouldThrow = () => listify(['', '', 1, '']);
    const expected = new TypeError('arrOfStrings is not an array of strings');
    assert.throws(shouldThrow, expected);
  });
});
