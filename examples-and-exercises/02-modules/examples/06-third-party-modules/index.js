'use strict';

console.log('BEGIN ./index.js');

// third-party modules are installed using npm or yarn
//  they are not built into node.js
//  they are hosted online and you download their code into your project
//  they are written by all sorts of people (security, size and reliability concerns!)
//  they also don't use a path when requiring
const chalk = require('chalk');
// GitHub: https://github.com/chalk/chalk (source code repository)
// npm: https://www.npmjs.com/package/chalk (page on the npm package registry)

const hello = 'hello';
const inverseHello = chalk.bgBlack.whiteBright(hello);
const emphasizedInverseHello = chalk.bold.italic(inverseHello);

console.log(hello);
console.log(inverseHello);
console.log(emphasizedInverseHello);

console.log('END ./index.js');
