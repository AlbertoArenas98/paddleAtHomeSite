require("dotenv").config();
const express = require("express");

const app = express();



app.listen(process.env.PORT, () =>
  console.info("> listening at: reventando el servidor", process.env.PORT)
);