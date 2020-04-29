const assert = require('assert');

// `assert has 4 other methods that will make your life easy`
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



// `assert.notDeepStrictEqual(a, b)`

// `checks if ANY key/value pair in two objects are different`
assert.notDeepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 4 });
try {
  assert.notDeepStrictEqual({ a: 2, b: 3 }, { b: 3, a: 2 });
} catch (err) {
  console.log(err);
};

// `checks if all ANY value in two arrays are the different`
assert.notDeepStrictEqual([2, 3], [3, 3]);
try {
  assert.notDeepStrictEqual([2, 3], [2, 3]);
} catch (err) {
  console.log(err);
};

// `can compare nested data structures (1)`
assert.notDeepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'z'] });
try {
  assert.notDeepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'y'] });
} catch (err) {
  console.log(err);
};

// `can compare nested data structures (2)`
assert.notDeepStrictEqual([{ x: 2 }, { x: 4 }], [{ x: 2 }, { x: 3 }]);
try {
  assert.notDeepStrictEqual([{ x: 2 }, { x: 3 }], [{ x: 2 }, { x: 3 }]);
} catch (err) {
  console.log(err);
};





// `be aware of NaN!`

assert.notDeepStrictEqual({ a: 2, b: NaN }, { a: 2, b: NaN });
try {
  assert.deepStrictEqual({ a: 2, b: NaN }, { a: 2, b: NaN });
} catch (err) {
  console.log(err);
};


