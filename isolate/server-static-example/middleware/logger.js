// https://github.com/Dunebook/ExpressjsMiddlewarelogging
//  with chalk dependency refactored out

const fs = require("fs");

const getActualRequestDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9; // constant to convert to nanoseconds
  const NS_TO_MS = 1e6; // constant to convert to milliseconds
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

module.exports = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;

  const start = process.hrtime();
  const durInMs = getActualRequestDurationInMilliseconds(start);

  let msgGenerator = (timeColor, msColor) =>
    `[${timeColor + formatted_date + (timeColor ? '\x1b[0m' : '')}] ${method}:`
    + `${url} ${status} ${msColor + durInMs.toLocaleString() + "ms" + (msColor ? '\x1b[0m' : '')}`;
  console.log(msgGenerator('\x1b[34m', '\x1b[31m'));
  fs.appendFile("request_logs.txt", msgGenerator('', '') + "\n", err => {
    if (err) {
      console.log(err);
    }
  });
  next();
};
