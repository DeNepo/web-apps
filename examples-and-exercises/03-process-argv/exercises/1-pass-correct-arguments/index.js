'use strict';

// pass the correct command line arguments to pass these tests

const { describe, it } = require('../describe-it.js');
const assert = require('assert');

const userArguments = process.argv.slice(2);

describe('the user arguments should be like:', () => {
  it('three arguments', () => {
    assert.strictEqual(userArguments.length, 3);
  });
  it('first one is "gorgeous"', () => {
    assert.strictEqual(userArguments[0], 'gorgeous');
  });
  it('second one is "spiced"', () => {
    assert.strictEqual(userArguments[1], 'spiced');
  });
  it('third one is "potato"', () => {
    assert.strictEqual(userArguments[2], 'potato');
  });
  it('together they are: ["gorgeous", "spiced", "potato"]', () => {
    assert.deepStrictEqual(userArguments, ["gorgeous", "spiced", "potato"]);
  });
});
