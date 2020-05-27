const util = require('util');
const path = require('path');
const fs = require('fs');
const tv4 = require('tv4');

const FRUIT_SCHEMA = require('../data/fruit-schema.json');
const DATA_PATH = path.join(__dirname, '..', 'data', 'fruit-data.json');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const handlers = {
  create: async (req, res) => {

    const newFurniture = req.body

    try {
      const fruitDataString = await readFile(DATA_PATH, 'utf-8');
      const fruitData = JSON.parse(fruitDataString);

      newFurniture.id = fruitData.nextId;
      fruitData.nextId++;

      const isValid = _;

      if (_) {
        const error = _;
        console.error(error)

        res.status(400).json({
          error: {
            message: error.message,
            dataPath: error.dataPath
          }
        })
        return
      }

      fruitData.fruit.push(newFurniture);

      const newFurnitureDataString = JSON.stringify(fruitData, null, '  ');

      await writeFile(DATA_PATH, newFurnitureDataString);

      res.json(newFurniture);

    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

    }

  },
  readAll: async (req, res) => {
    try {
      const fruitDataString = await _;
      const fruitData = _;

      res.json(fruitData.fruit);

    } catch (err) {
      console.log(err)

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

    }
  },
  readOne: async (req, res) => {
    const idToUpdateStr = _;
    const idToUpdate = _;

    try {
      const fruitDataString = await readFile(DATA_PATH, 'utf-8');
      const fruitData = JSON.parse(fruitDataString);
      const selectedFurniture = fruitData.fruit
        .find(profile => profile.id === idToUpdate);

      res.json(selectedFurniture);

    } catch (err) {
      console.log(err)

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

    }
  },
  update: async (req, res) => {
    const idToUpdateStr = req.params.id;
    const idToUpdate = Number(idToUpdateStr);

    const newFurniture = req.body
    newFurniture.id = idToUpdate;
    const isValid = _

    if (!isValid) {
      const error = _
      console.error(error)

      res.status(400).json({
        error: {
          _,
          _
        }
      })
      return
    }

    try {
      const fruitDataString = await readFile(DATA_PATH, 'utf-8');
      const fruitData = JSON.parse(fruitDataString);

      const entryToUpdate = fruitData.fruit
        .find(profile => profile.id === idToUpdate);

      if (entryToUpdate) {
        const indexOfFurniture = fruitData.fruit
          .indexOf(entryToUpdate);
        fruitData.fruit[indexOfFurniture] = newFurniture;

        const newFurnitureDataString = JSON.stringify(fruitData, null, '  ');

        await writeFile(DATA_PATH, newFurnitureDataString);

        res.json(newFurniture);
      } else {
        res.json(`no entry with id ${idToUpdate}`);
      }

    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

    }
  },
  delete: async (req, res) => {
    const idToDeleteStr = req.params.id;
    const idToDelete = Number(idToDeleteStr);

    try {
      const fruitDataString = await readFile(DATA_PATH, 'utf-8');
      const fruitData = JSON.parse(fruitDataString);

      const entryToDelete = fruitData.fruit
        .find(profile => profile.id === idToDelete);

      if (entryToDelete) {

        fruitData.fruit = fruitData.fruit
          .filter(profile => profile.id !== entryToDelete.id);

        const newFurnitureDataString = JSON.stringify(fruitData, null, '  ');

        await _;

        res.json(entryToDelete);
      } else {
        res.json(`no entry with id ${idToUpdate}`);
      }

    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }

    }
  },
};

module.exports = handlers;
