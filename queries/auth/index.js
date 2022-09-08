const { selectFullUser, insertUser } = require("./queries");
const { queryCatcher } = require("../utils");

const getFullUser =
  (db) =>
  async ({ email }) => {
    const database = await db;

    return await queryCatcher(
      database.maybeOne,
      "getFullUser"
    )(selectFullUser({ email }));
  };

const createUser =
  (db) =>
  async ({ email, password, first_name }) => {
    const user = await getFullUser(db)({ email });

    if (user.data) {
      return {
        ok: false,
        code: "duplication",
      };
    }

    const database = await db;

    return await queryCatcher(
      database.query,
      "createUser"
    )(insertUser({ email, password, first_name }));
  };

  const getCorrectUser = (db) => async ({ email, compareFn }) => {
    const user = await getFullUser(db)({ email });

    if (!user.data) {
      return {
        ok: false,
        code: "unknown",
      };
    }

    const isPasswordCorrect = await compareFn(user.data.password);

    if (!isPasswordCorrect) {
      return {
        ok: false,
        code: "unknown",
      };
    }

    return {
      ok: true,
      data: { email: user.data.email },
    };
  };


  module.exports = {
    getFullUser,
    createUser,
    getCorrectUser,
  };