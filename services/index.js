const router = require("express").Router();

module.exports = (db) => {
  router.use("/auth", require("./auth")(db));
  router.use("/user", require("./user")(db));
  router.use("/groupClass", require("./group-class")(db));

  return router;
};
