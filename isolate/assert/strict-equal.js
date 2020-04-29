const assert = require('assert');

// When one of these assertions fail they create a very helpful error message
//  type of assertion
//  comparison between the actual and expected values
//  line number



// 'assert.strictEqual(a, b), like using ==='

// `assert.strictEqual(a, b) checks if two values are strictly equal`
assert.strictEqual(1, 1);

// `throws an error if they are NOT strictly `
try {
  assert.strictEqual('1', 1);
} catch (err) {
  console.log(err);
};



// 'assert.notStrictEqual(a, b), like using !=='

// `assert.notStrictEqual(a, b) checks if two values are NOT strictly equal`
assert.notStrictEqual('1', 1);

// `throws an error if they ARE strictly equal`
try {
  assert.notStrictEqual(1, 1);
} catch (err) {
  console.log(err);
};



// `assert.deepStrictEqual(a, b)`


// `checks if all key/value pairs in an object are the same`
assert.deepStrictEqual({ a: 2, b: 3 }, { b: 3, a: 2, });
try {
  assert.deepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 4 });
} catch (err) {
  console.log(err);
};

// `checks if all the items in an array are the same`
assert.deepStrictEqual([2, 3], [2, 3]);
try {
  assert.deepStrictEqual([2, 3], [3, 3]);
} catch (err) {
  console.log(err);
};

// `can compare nested data structures`

assert.deepStrictEqual({ b: ['x', 'y'], a: 2 }, { b: ['x', 'y'], a: 2 });
try {
  assert.deepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'z'] });
} catch (err) {
  console.log(err);
};



assert.deepStrictEqual([{ x: 2 }, { x: 3 }], [{ x: 2 }, { x: 3 }]);
try {
  assert.deepStrictEqual([{ x: 2 }, { x: 'y' }], [{ x: 2 }, { x: 3 }]);
} catch (err) {
  console.log(err);
};







