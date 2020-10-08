// https://github.com/Dunebook/ExpressjsMiddlewarelogging

const fs = require("fs");

// date wrangling is hard, and something you should never do by hand
// use libraries, they'll always do a better job of this difficult problem
// why is date manipulation considered a difficult problem?
// have a look at https://zachholman.com/talk/utc-is-enough-for-everyone-right
// WARNING: long and detailed read on the history of date wrangling in computer science
// well worth the read
const datefns = require("date-fns")

// middlewares are just functions in the chain of express functions.
// They have the signature `function(req, res, next)` something you will see a LOT
// and should become familiar with
// remember, `req` has all the data about the incoming request
// `res` holds functions that help us reply to requests
// `next` passes on execution to the next function in the chain
module.exports = (req, res, next) => {

  // In this simple middleware we will log
  // - the timestamp of the request
  // - the request method (GET, POST, PUT etc.)
  // - the route being requested

  // let's get the current time
  const currentDatetime = new Date();

  // and use `date-fns`'s format function to format it
  // check here: https://date-fns.org/v2.12.0/docs/format to see how that
  // format string is interpreted. Don't be intimidated. As with most things,
  // you'll only need 20% of this 80% of the time
  const formattedDatetime = datefns.format(currentDatetime, "yyyy-MM-dd hh:mm:ss.SSS aaaa");

  // reminder: `req` holds the details of the incoming request
  // such as which HTTP method was used and which route is being accessed
  const method = req.method;
  const url = req.url;

  // the terminal can understand color, but a text file can't, so we'll form
  // two messages, one for the terminal and one for the file
  // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
  const coloredLogMessage = `[\x1b[34m${formattedDatetime}\x1b[0m] \x1b[31m${method}\x1b[0m ${url}`;
  const plainLogMessage = `[${formattedDatetime}] ${method} ${url}`

  console.log(coloredLogMessage);

  // we're appending to the log file. what would happen if we used `fs.writeFile` instead?
  fs.appendFile("request_logs.txt", `${plainLogMessage}\n`, err => {
    if (err) {
      console.log(err);
    }
  });

  // let's move on to the next function in the chain
  // note how we have not modified the request in any way,
  // only read some values and printed them out
  next();
};
