'use strict';

console.log('BEGIN ./other-file.js');

console.log('module.exports (before) -', module.exports);

// you can assign an object to .exports
module.exports = {
  a: 1,
  b: 2
};
// like any object, you can add or change properties
module.exports.b = true;
module.exports.c = 3;


console.log('module.exports (after) -', module.exports);

console.log('END ./other-file.js ');
