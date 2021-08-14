'use strict';

const generateList = require('./generate-list.js');

describe('generateList joins an array of strings into a single formatted list', () => {
  describe('when all the arguments are valid', () => {
    it('returns an empty string for an empty array', () => {
      const expected = '';
      const actual = generateList([], false);
      expect(actual).toEqual(expected);
    });
    it('can create lists with one item', () => {
      const expected = '- toad';
      const actual = generateList(['toad'], false);
      expect(actual).toEqual(expected);
    });
    it('can create numbered lists with one item', () => {
      const expected = '1. toad';
      const actual = generateList(['toad'], true);
      expect(actual).toEqual(expected);
    });
    it('can create lists with many items', () => {
      const expected = '- gorgeous\n- spiced\n- potato';
      const actual = generateList(['gorgeous', 'spiced', 'potato'], false);
      expect(actual).toEqual(expected);
    });
    it('can create numbered lists with many items', () => {
      const expected = '1. gorgeous\n2. spiced\n3. potato';
      const actual = generateList(['gorgeous', 'spiced', 'potato'], true);
      expect(actual).toEqual(expected);
    });
  });
  describe('when arguments are not valid', () => {
    it('throws an error if the first argument is not an array', () => {
      const shouldThrow = () => generateList('not an array', false);
      const expected = new TypeError('arrOfStrings is not an array');
      expect(shouldThrow).toEqual(expected);
    });
    it('throws an error if the array contains non-strings', () => {
      const shouldThrow = () => generateList(['', '', 1, ''], false);
      const expected = new TypeError('arrOfStrings is not an array of strings');
      expect(shouldThrow).toEqual(expected);
    });
    it('throws an error if the second is not boolean', () => {
      const shouldThrow = () => generateList(['a', 'b', 'c'], 100);
      const expected = new TypeError('numberedList is not boolean');
      expect(shouldThrow).toEqual(expected);
    });
  });
});
