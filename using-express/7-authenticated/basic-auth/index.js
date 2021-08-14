const fs = require('fs');
const util = require('util');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);
const deleteAsync = util.promisify(fs.unlink);

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/data/:username', async (req, res, next) => {
  if (!req.headers.authorization) {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).json({
      message: 'Missing authorization header',
    });
    return;
  }

  const headerParts = req.headers.authorization.split(' ');

  if (headerParts.length !== 2) {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).json({
      message: 'Bad authorization header',
    });
    return;
  }

  if (headerParts[0] !== 'Basic') {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).json({
      message: 'Scheme must be basic',
    });
    return;
  }

  const credentials = Buffer.from(headerParts[1], 'base64').toString('utf-8');
  const credentialParts = credentials.split(':');

  if (credentialParts.length !== 2) {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).json({
      message: 'Bad basic auth credentials',
    });
    return;
  }

  const authenticationResults = await authenticate(
    credentialParts[0],
    credentialParts[1],
  );

  if (!authenticationResults.success) {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).json({
      message: authenticationResults.message,
    });
    return;
  }

  next();
});

app.get('/data/:username', async (req, res) => {
  const result = await readData(req.params.username);

  if (!result.exists) {
    res.status(404).json({
      message:
        "The data you're looking for does not exist. Please create it first.",
    });
    return;
  }

  res.json({
    name: req.params.username,
    data: result.data,
  });
});

app.post('/data/:username', async (req, res) => {
  const dataToWrite = req.body;

  await writeData(req.params.username, dataToWrite);

  res.json({
    message: 'Data written successfully.',
  });
});

app.delete('/data/:username', async (req, res) => {
  await deleteData(req.params.username);

  res.json({
    message: 'Data deleted successfully',
  });
});

app.use(function (req, res) {
  res.status(404).json({
    message: "the route you're looking for does not exist",
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err, 'failed to start server');
    return;
  }

  console.info('server started on port 3000');
});

/**
 * @param {String} username
 * @return {Promise<{exists: Boolean, data: Object}>}
 */
async function readData(username) {
  try {
    const data = await readAsync(constructFilePath(username), 'utf-8');

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
  }
}

/**
 * @param {String} username
 * @param {String} data
 * @return {Promise<void>}
 */
async function writeData(username, data) {
  await writeAsync(
    constructFilePath(username),
    JSON.stringify(data, null, 2),
    'utf-8',
  );
}

async function deleteData(username) {
  try {
    await deleteAsync(constructFilePath(username));
  } catch (e) {
    if (e.code === 'ENOENT') {
      return;
    }

    throw e;
  }
}

/**
 * @param {String} username
 * @return {String}
 */
function constructFilePath(username) {
  return `${__dirname}/data/${username}.json`;
}

async function authenticate(username, password) {
  try {
    const credentials = JSON.parse(
      await readAsync(`${__dirname}/credentials/${username}.json`),
    );

    if (credentials.password !== password) {
      return {
        success: false,
        message: 'Password mismatch',
      };
    }

    return {
      success: true,
    };
  } catch (e) {
    if (e.code === 'ENOENT') {
      return {
        success: false,
        message: 'Unknown username',
      };
    }

    throw e;
  }
}
