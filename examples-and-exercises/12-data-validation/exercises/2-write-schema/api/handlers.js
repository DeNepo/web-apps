const util = require('util');
const path = require('path');
const fs = require('fs');
const tv4 = require('tv4');

const FURNITURE_SCHEMA = require('../data/furniture-schema.json');
const DATA_PATH = path.join(__dirname, '..', 'data', 'furniture-data.json');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const handlers = {
  create: async (req, res) => {

    const newFurniture = req.body

    try {
      const furnitureDataString = await readFile(DATA_PATH, 'utf-8');
      const furnitureData = JSON.parse(furnitureDataString);

      newFurniture.id = furnitureData.nextId;
      furnitureData.nextId++;

      const isValid = tv4.validate(newFurniture, FURNITURE_SCHEMA)

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

      furnitureData.furniture.push(newFurniture);

      const newFurnitureDataString = JSON.stringify(furnitureData, null, '  ');

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
      const furnitureDataString = await readFile(DATA_PATH, 'utf-8');
      const furnitureData = JSON.parse(furnitureDataString);

      res.json(furnitureData.furniture);

    } catch (err) {
      console.log(err)

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }


    }
  },
  readOne: async (req, res) => {
    const idToUpdateStr = req.params.id;
    const idToUpdate = Number(idToUpdateStr);

    try {
      const furnitureDataString = await readFile(DATA_PATH, 'utf-8');
      const furnitureData = JSON.parse(furnitureDataString);
      const selectedFurniture = furnitureData.furniture
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
    const isValid = tv4.validate(newFurniture, FURNITURE_SCHEMA)

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

    try {
      const furnitureDataString = await readFile(DATA_PATH, 'utf-8');
      const furnitureData = JSON.parse(furnitureDataString);

      const entryToUpdate = furnitureData.furniture
        .find(profile => profile.id === idToUpdate);

      if (entryToUpdate) {
        const indexOfFurniture = furnitureData.furniture
          .indexOf(entryToUpdate);
        furnitureData.furniture[indexOfFurniture] = newFurniture;

        const newFurnitureDataString = JSON.stringify(furnitureData, null, '  ');

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
      const furnitureDataString = await readFile(DATA_PATH, 'utf-8');
      const furnitureData = JSON.parse(furnitureDataString);

      const entryToDelete = furnitureData.furniture
        .find(profile => profile.id === idToDelete);

      if (entryToDelete) {

        furnitureData.furniture = furnitureData.furniture
          .filter(profile => profile.id !== entryToDelete.id);

        const newFurnitureDataString = JSON.stringify(furnitureData, null, '  ');

        await writeFile(DATA_PATH, newFurnitureDataString);

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
