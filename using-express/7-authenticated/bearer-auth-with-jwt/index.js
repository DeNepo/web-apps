const fs = require('fs');
const util = require('util');
const crypto = require('crypto');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);
const deleteAsync = util.promisify(fs.unlink);

const express = require('express');
const morgan = require('morgan');
const moment = require('moment');
const jsonwebtoken = require('jsonwebtoken');

const signingSecret =
  'b5e5f7233b4325177be1ac500729c239b9a24908cda85c2bdb6ce6e528dd235799bc532c547a41ff866ead9d6efc180c5b05a1b80ad3654cc0fb91668d36370fd76043bab9f74112ecc9eb07afd769d3c1cc12481a190becec4d52af9cf9e23492ef8045a0b6668323c2e8a86ae5a258f397625a14c7043cd139f87fa363e67e';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/login', async (req, res, next) => {
  const result = await login(req.body.username, req.body.password);

  if (!result.success) {
    res.status(401).json({
      message: result.message,
    });
    return;
  }

  res.json({
    token: result.token,
  });
});

app.use('/data/:username', async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      message: 'Missing authorization header',
    });
    return;
  }

  const headerParts = req.headers.authorization.split(' ');

  if (headerParts.length !== 2) {
    res.status(401).json({
      message: 'Bad authorization header',
    });
    return;
  }

  if (headerParts[0] !== 'Bearer') {
    res.status(401).json({
      message: 'Scheme must be Bearer',
    });
    return;
  }

  const token = headerParts[1];

  const authenticationResult = await authenticate(req.params.username, token);

  if (!authenticationResult.success) {
    res.status(401).json({
      message: authenticationResult.message,
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

async function login(username, password) {
  try {
    const credentials = JSON.parse(
      await readAsync(`${__dirname}/credentials/${username}.json`, 'utf-8'),
    );

    if (credentials.password !== password) {
      return {
        success: false,
        message: 'Password mismatch',
      };
    }

    const token = jsonwebtoken.sign(
      {
        username: username,
      },
      signingSecret,
      {
        expiresIn: 3600,
      },
    );

    if (!credentials.tokens) {
      credentials.tokens = {};
    }

    credentials.tokens[token] = {
      expiry: moment().add(1, 'hour').toISOString(),
    };

    await writeAsync(
      `${__dirname}/credentials/${username}.json`,
      JSON.stringify(credentials, null, 2),
      'utf-8',
    );

    return {
      success: true,
      token: token,
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

async function authenticate(username, token) {
  try {
    const payload = jsonwebtoken.verify(token, signingSecret);

    if (payload.username !== username) {
      return {
        success: false,
        message: 'Token does not belong to user',
      };
    }

    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      message: e.message,
    };
  }
}
