// https://github.com/Dunebook/ExpressjsMiddlewarelogging

const fs = require("fs");

let cycles = 0;

module.exports = (req, res, next) => {
  const _cycle = ++cycles;

  const reqDateTime = (new Date()).toLocaleString();


  const method = req.method;
  const url = req.url;

  const reqColoredLogMessage = `request ${_cycle}: [\x1b[34m${reqDateTime}\x1b[0m] \x1b[31m${method}\x1b[0m ${url}`;
  const reqPlainLogMessage = `request ${_cycle}: [${reqDateTime}] ${method} ${url}`;

  console.log(reqColoredLogMessage);


  // sync to 100% guarentee it writes before the response. I think this is necessary?
  fs.appendFileSync("request_logs.txt", `${reqPlainLogMessage}\n`);


  const nativeEnd = res.end;


  res.end = function () {

    const resDateTime = (new Date()).toLocaleString();

    const resColoredLogMessage = `response ${_cycle}: [\x1b[34m${resDateTime}\x1b[0m] ${res.status()}`;
    const resPlainLogMessage = `response ${_cycle}: [${resDateTime}] ${res.status()}`;

    console.log(resColoredLogMessage);
    fs.appendFileSync("request_logs.txt", `${resPlainLogMessage}\n`);

    nativeEnd.apply(res, arguments);
  };


  next();
};
