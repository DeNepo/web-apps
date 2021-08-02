const util = require('util');
const path = require('path');
const fs = require('fs');
const tv4 = require('tv4');

const ANIMALS_SCHEMA = require('../data/animal-schema.json');
const DATA_PATH = path.join(__dirname, '..', 'data', 'animals-data.json');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const handlers = {
  create: async (req, res) => {

    const newAnimal = req.body

    try {
      const animalsDataString = await readFile(DATA_PATH, 'utf-8');
      const animalsData = JSON.parse(animalsDataString);

      newAnimal.id = animalsData.nextId;
      animalsData.nextId++;

      const isValid = tv4.validate(newAnimal, ANIMALS_SCHEMA)

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

      animalsData.animals.push(newAnimal);

      const newAnimalDataString = JSON.stringify(animalsData, null, '  ');

      await writeFile(DATA_PATH, newAnimalDataString);

      res.json(newAnimal);

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
      const animalsDataString = await readFile(DATA_PATH, 'utf-8');
      const animalsData = JSON.parse(animalsDataString);

      res.json(animalsData.animals);

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
      const animalsDataString = await readFile(DATA_PATH, 'utf-8');
      const animalsData = JSON.parse(animalsDataString);
      const selectedAnimal = animalsData.animals
        .find(animal => animal.id === idToUpdate);

      res.json(selectedAnimal);

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

    const newAnimal = req.body
    newAnimal.id = idToUpdate;
    const isValid = tv4.validate(newAnimal, ANIMALS_SCHEMA)

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
      const animalsDataString = await readFile(DATA_PATH, 'utf-8');
      const animalsData = JSON.parse(animalsDataString);

      const entryToUpdate = animalsData.animals
        .find(animal => animal.id === idToUpdate);

      if (entryToUpdate) {
        const indexOfAnimal = animalsData.animals
          .indexOf(entryToUpdate);
        animalsData.animals[indexOfAnimal] = newAnimal;

        const newAnimalDataString = JSON.stringify(animalsData, null, '  ');

        await writeFile(DATA_PATH, newAnimalDataString);

        res.json(newAnimal);
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
      const animalsDataString = await readFile(DATA_PATH, 'utf-8');
      const animalsData = JSON.parse(animalsDataString);

      const entryToDelete = animalsData.animals
        .find(animal => animal.id === idToDelete);

      if (entryToDelete) {

        animalsData.animals = animalsData.animals
          .filter(animal => animal.id !== entryToDelete.id);

        const newAnimalDataString = JSON.stringify(animalsData, null, '  ');

        await writeFile(DATA_PATH, newAnimalDataString);

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
