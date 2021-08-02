'use strict';

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', process.argv[2] || '');

const findAndRunTests = async parentPath => {
  const contents = fs.readdirSync(parentPath);
  for (const item of contents) {
    if (item === 'node_modules' || item === 'lib') {
      continue;
    }

    const itemPath = path.join(parentPath, item);
    if (fs.lstatSync(itemPath).isDirectory()) {
      findAndRunTests(itemPath);
    } else if (/(spec.js|test.js)/i.test(path.basename(itemPath))) {
      console.log(itemPath.replace(path.join(__dirname, '..'), '--> '), '\n');

      try {
        require(itemPath);
      } catch (err) {
        console.error(err);
      }
    }
  }
};

findAndRunTests(root);
