const chalk = require('chalk');

const describe = (message = '', testCallback = () => { }) => {
  console.log(chalk.bold.underline.blue(`${message}\n`));
  try {
    testCallback();
  } catch (err) {
    console.error(err);
  }
  console.log('');
};

const it = (message = '', testCallback = () => { }) => {
  console.log(chalk.bold.underline(`${message}`));
  try {
    testCallback();
    console.log(chalk.bold.green('- pass'));
  } catch (err) {
    console.log(chalk.bold.red('- fail:\n'));
    console.error(err);
  }
  console.log('');
};

module.exports = {
  describe,
  it
};
