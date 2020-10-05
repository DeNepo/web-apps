const greet = require('./greet.js');

const nameArgument = process.argv[2];

const greeting = greet(nameArgument);

console.log(greeting);
