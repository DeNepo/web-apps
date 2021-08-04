'use strict';

const fs = require('fs');
const util = require('util');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);
const deleteAsync = util.promisify(fs.unlink);

/**
 * @param {String} ownerName
 * @return {String}
 */
const constructFilePath = ownerName => `${__dirname}/data/${ownerName}.json`;

/**
 * @param {String} ownerName
 * @return {Promise<{exists: Boolean, [data]: Object}>}
 */
const readData = async ownerName => {
  try {
    const data = await readAsync(constructFilePath(ownerName), 'utf-8');

    return {
      exists: true,
      data: JSON.parse(data),
    };
  } catch (e) {
    if (e.code === 'ENOENT') {
      return {
        exists: false,
      };
    }

    throw e;
  }
};

/**
 * @param {String} ownerName
 * @param {String} data
 * @return {Promise<void>}
 */
const writeData = async (ownerName, data) => {
  await writeAsync(
    constructFilePath(ownerName),
    JSON.stringify(data, null, 2),
    'utf-8'
  );
};

const deleteData = async ownerName => {
  try {
    await deleteAsync(constructFilePath(ownerName));
  } catch (e) {
    if (e.code === 'ENOENT') {
      return;
    }

    throw e;
  }
};

module.exports = {
  readData,
  writeData,
  deleteData,
};
