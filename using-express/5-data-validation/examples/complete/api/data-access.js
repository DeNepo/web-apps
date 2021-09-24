const util = require('util');
const path = require('path');
const fs = require('fs');

const DATA_PATH = path.join(__dirname, '..', 'data', 'profiles-data.json');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dataAccess = {
  read: async () => {
    const dataString = await readFile(DATA_PATH, 'utf-8');
    return JSON.parse(dataString);
  },
  write: async (data = {}) => {
    const stringifiedData = JSON.stringify(data, null, '  ');
    await writeFile(DATA_PATH, stringifiedData);
  },
};

module.exports = dataAccess;
