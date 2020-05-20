"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const logger = require("./middleware/logger");
const path = require("path");

// initialize the app
const app = express();

// log requests
app.use(logger);

// parse body
app.use(bodyParser.json());

// parse queries
app.use(bodyParser.raw({ type: "text/plain" }));
// statically serve the frontend
app.use("/", express.static(path.join(__dirname, "public")));

// declare the routes
app.post("/param/:value", (req, res) => {
  // read value from the param
  const paramValue = req.params.value;

  console.log(`param value: ${paramValue}`);

  const responseData = {
    paramValue,
  };
  res.json(responseData);
});

app.post("/query", (req, res) => {
  // read value from the query
  const queryValue = req.query.value;

  console.log(`query value: ${queryValue}`);

  const responseData = {
    queryValue,
  };
  res.json(responseData);
});

app.post("/body", (req, res) => {
  // read value from the body
  const bodyValue = req.body.value;

  console.log(`body value: ${bodyValue}`);

  const responseData = {
    bodyValue,
  };
  res.json(responseData);
});


// start the app

// listen port

app.listen(config.PORT, () => {
  console.log(
    `Example app listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});
