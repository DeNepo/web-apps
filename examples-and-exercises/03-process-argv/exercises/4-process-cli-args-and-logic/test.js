'use strict';

const { describe, it } = require('../../../describe-it.js');
const assert = require('assert');

const generateList = require('./generate-list.js');

describe('generateList joins an array of strings into a single formatted list', () => {
  describe('when all the arguments are valid', () => {
    it('returns an empty string for an empty array', () => {
      const expected = '';
      const actual = generateList([], false);
      assert.strictEqual(actual, expected);
    });
    it('can create lists with one item', () => {
      const expected = '- toad';
      const actual = generateList(['toad'], false);
      assert.strictEqual(actual, expected);
    });
    it('can create numbered lists with one item', () => {
      const expected = '1. toad';
      const actual = generateList(['toad'], true);
      assert.strictEqual(actual, expected);
    });
    it('can create lists with many items', () => {
      const expected = '- gorgeous\n- spiced\n- potato';
      const actual = generateList(['gorgeous', 'spiced', 'potato'], false);
      assert.strictEqual(actual, expected);
    });
    it('can create numbered lists with many items', () => {
      const expected = '1. gorgeous\n2. spiced\n3. potato';
      const actual = generateList(['gorgeous', 'spiced', 'potato'], true);
      assert.strictEqual(actual, expected);
    });
  });
  describe('when arguments are not valid', () => {
    it('throws an error if the first argument is not an array', () => {
      const shouldThrow = () => generateList('not an array', false);
      const expected = new TypeError('arrOfStrings is not an array');
      assert.throws(shouldThrow, expected);
    });
    it('throws an error if the array contains non-strings', () => {
      const shouldThrow = () => generateList(['', '', 1, ''], false);
      const expected = new TypeError('arrOfStrings is not an array of strings');
      assert.throws(shouldThrow, expected);
    });
    it('throws an error if the second is not boolean', () => {
      const shouldThrow = () => generateList(['a', 'b', 'c'], 100);
      const expected = new TypeError('numberedList is not boolean');
      assert.throws(shouldThrow, expected);
    });
  });
});
