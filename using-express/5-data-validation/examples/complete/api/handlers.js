const businessLogic = require('./business-logic');

const handlers = {
  create: async (req, res) => {
    const newProfile = req.body;

    try {
      const { profile, validationError } = await businessLogic.create(
        newProfile,
      );

      if (validationError) {
        console.error(validationError);
        res.status(400).json({
          error: {
            message: validationError.message,
            dataPath: validationError.dataPath,
          },
        });
      } else {
        res.json(profile);
      }
    } catch (err) {
      console.error(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
      }
    }
  },
  readAll: async (req, res) => {
    try {
      const profiles = await businessLogic.readAll();
      res.json(profiles);
    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }
    }
  },
  readOne: async (req, res) => {
    const profileIdString = req.params.id;
    const profileId = Number(profileIdString);

    try {
      const profile = await businessLogic.readOne(profileId);
      res.json(profile);
    } catch (err) {
      console.log(err);

      if (err && err.code === 'ENOENT') {
        res.status(404).end();
        return;
      }
    }
  },
  update: async (req, res) => {
    const idToUpdateStr = req.params.id;
    const idToUpdate = Number(idToUpdateStr);

    const newProfile = req.body;

    try {
      const { updatedProfile, validationError } = await businessLogic.update(
        idToUpdate,
        newProfile,
      );

      if (validationError) {
        console.error(validationError);
        res.status(400).json({
          error: {
            message: validationError.message,
            dataPath: validationError.dataPath,
          },
        });
      } else {
        res.json(updatedProfile);
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
      const deletedProfile = await businessLogic.delete(idToDelete);
      res.json(deletedProfile);
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
