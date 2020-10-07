'use strict';

// hint: how can you pass an argument with a space in it?

const { it } = require('../../../describe-it.js');
const assert = require('assert');

const listify = require('./listify.js');

const userInput = process.argv.slice(2);

const listifiedInput = listify(userInput);

console.log(listifiedInput);

it('listified input should be correct', () => {
  const expected = `- white cow
- red cape
- yellow hair
- gold slipper
`;
  assert.strictEqual(listifiedInput, expected);
});



