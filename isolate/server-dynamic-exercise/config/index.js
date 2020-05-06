const defaults = require("./default.js");
const config = require("./" + (process.env.NODE_ENV || "development") + ".js");
module.exports = Object.assign({}, defaults, config);
