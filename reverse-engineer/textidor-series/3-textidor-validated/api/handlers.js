const util = require('util');
const path = require('path');
const fs = require('fs');
_;

_;
_;

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const handlers = {
  readAll: async (req, res) => {
    try {
      _;
      _;

      const fileNames = filesData.files
        .map(entry => ({
          id: entry.id,
          name: entry.name,
        }));

      res.json(fileNames)

    } catch (err) {
      console.log(err)

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

      next(err);
    }
  },
  readOne: async (req, res) => {
    const fileId = _;

    try {
      const filesDataString = await readFile(DATA_PATH, 'utf-8');
      const filesData = JSON.parse(filesDataString);

      const entryWithId = filesData.files
        .find(entry => _);

      if (entryWithId) {
        _;
      } else {
        res.status(404).end();
      }

    } catch (err) {
      console.log(err)

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

      next(err);
    }
  },
  create: async (req, res) => {
    const newFile = req.body;

    try {
      const filesDataString = await readFile(DATA_PATH, 'utf-8');
      const filesData = JSON.parse(filesDataString);

      _;
      _;

      const isValid = _;

      if (!isValid) {
        const error = tv4.error
        console.error(error)

        res.status(400).json({
          error: {
            message: error.message,
            dataPath: error.dataPath
          }
        })
        return
      }

      filesData.files.push(newFile);

      const newFileDataString = JSON.stringify(filesData, null, '  ');

      await _;

      res.json(newFile);

    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

      next(err);
    }

  },
  update: async (req, res) => {
    const idToUpdate = Number(req.params.id);

    _;
    _;
    _;

    if (!isValid) {
      _;
      console.error(error)

      res.status(400).json({
        error: {
          message: error.message,
          dataPath: error.dataPath
        }
      })
      return
    }

    try {
      const filesDataString = await readFile(DATA_PATH, 'utf-8');
      const filesData = JSON.parse(filesDataString);

      const entryToUpdate = filesData.files
        .find(file => file.id === idToUpdate);

      if (entryToUpdate) {
        _;
        _;

        _;

        _;

        res.redirect(303, '/api/files');
      } else {
        res.json(`no entry with id ${idToUpdate}`);
      }

    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

      next(err);
    }
  },
  delete: async (req, res) => {
    const idToDelete = _;

    try {
      const filesDataString = await readFile(DATA_PATH, 'utf-8');
      const filesData = JSON.parse(filesDataString);

      const entryToDelete = filesData.files
        .find(file => file.id === idToDelete);

      if (_) {

        _;

        const newFileDataString = JSON.stringify(filesData, null, '  ');

        await writeFile(DATA_PATH, newFileDataString);

        res.redirect(303, '/api/files');
      } else {
        res.send(`no entry with id ${idToDelete}`);
      }

    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

      next(err);
    }
  },
};

module.exports = handlers;
