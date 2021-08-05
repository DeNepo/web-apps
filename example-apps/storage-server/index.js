'use strict';

// require dependencies
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const { readData, writeData, deleteData } = require('./data-access');

// create
const app = express();

// use parsing and logging middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// define routes
app.get('/data/:ownerName', async (req, res) => {
  const result = await readData(req.params.ownerName);

  if (!result.exists) {
    res.status(404).json({
      message:
        "The data you're looking for does not exist. Please create it first.",
    });
    return;
  }

  res.json({
    name: req.params.ownerName,
    data: result.data,
  });
});

app.post('/data/:ownerName', async (req, res) => {
  const dataToWrite = req.body;

  await writeData(req.params.ownerName, dataToWrite);

  res.json({
    message: 'Data written successfully.',
  });
});

app.delete('/data/:ownerName', async (req, res) => {
  await deleteData(req.params.ownerName);

  res.json({
    message: 'Data deleted successfully',
  });
});

// error-handling middleware
app.use(function (req, res) {
  res.status(404).json({
    message: "the route you're looking for does not exist",
  });
});

// start the server
app.listen(3000, (err) => {
  if (err) {
    console.error(err, 'failed to start server');
    return;
  }

  console.info('server started on port 3000');
});
