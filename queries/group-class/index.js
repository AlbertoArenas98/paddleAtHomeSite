const { selectOneGroupClass, insertOneGroupClass, selectAllGroupClasses } = require("./queries");
const { queryCatcher } = require("../utils");

const getOneGroupClass =
  (db) =>
    async ({ name }) => {
      return await queryCatcher(
        db.maybeOne,
        "getOneGroupClass"
      )(selectOneGroupClass({ name }));
    };

const getAllGroupClasses = (db) => async () => {
  return await queryCatcher(db.query, "getAllGroupClasses")(selectAllGroupClasses());
};

const createOneGroupClass =
  (db) =>
    async ({ name, city, type, time, level }) => {

      return await queryCatcher(
        db.query,
        "createGroupClass"
      )(insertOneGroupClass({ name, city, type, time, level }));
    };


module.exports = {
  getOneGroupClass,
  getAllGroupClasses,
  createOneGroupClass
};