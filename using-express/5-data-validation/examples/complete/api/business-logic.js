const tv4 = require('tv4');

const PROFILES_SCHEMA = require('../data/profile-schema.json');

const dataAccess = require('./data-access');

const businessLogic = {
  create: async (newProfile = {}) => {
    const profilesData = await dataAccess.read();

    newProfile.id = profilesData.nextId;
    profilesData.nextId++;

    const isValid = tv4.validate(newProfile, PROFILES_SCHEMA);
    if (!isValid) {
      return {
        validationError: {
          message: t4.error.message,
          dataPath: t4.error.dataPath,
        },
        profile: null,
      };
    }

    profilesData.profiles.push(newProfile);

    await dataAccess.write(profilesData);

    return {
      profile: newProfile,
      validationError: null,
    };
  },
  readAll: async () => {
    const profilesData = await dataAccess.read();
    return profilesData.profiles;
  },
  readOne: async (id = 0) => {
    const profilesData = await dataAccess.read();
    const selectedProfile = profilesData.profiles.find(
      (profile) => profile.id === id,
    );

    return selectedProfile;
  },
  update: async (id = 0, newProfile = {}) => {
    const isValid = tv4.validate(newProfile, PROFILES_SCHEMA);
    if (!isValid) {
      return {
        validationError: {
          message: t4.error.message,
          dataPath: t4.error.dataPath,
        },
        profile: null,
      };
    }

    const profilesData = await dataAccess.read();
    const entryToUpdate = profilesData.profiles.find(
      (profile) => profile.id === id,
    );

    if (entryToUpdate) {
      newProfile.id = id;

      const indexOfProfile = profilesData.profiles.indexOf(entryToUpdate);
      profilesData.profiles[indexOfProfile] = newProfile;

      await dataAccess.write(profilesData);

      return {
        profile: newProfile,
        validationError: null,
      };
    } else {
      throw new Error(`no entry with id ${id}`);
    }
  },
  delete: async (id = 0) => {
    const profilesData = await dataAccess.read();

    const entryToDelete = profilesData.profiles.find(
      (profile) => profile.id === id,
    );

    if (entryToDelete) {
      profilesData.profiles = profilesData.profiles.filter(
        (profile) => profile.id !== entryToDelete.id,
      );

      await dataAccess.write(profilesData);

      return entryToDelete;
    } else {
      throw new Error(`no entry with id ${id}`);
    }
  },
};

module.exports = businessLogic;
