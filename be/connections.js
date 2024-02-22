// IMPORTING DEPS
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./routes/allRoutes");
//loading env variables
dotenv.config();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;
// CONFIGURING DB CONNECTION
function DB_CONNECTION() {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => console.error(err));
}

// CONFIGURING SERVER
const SERVER = express();

// MIDDLEWARES
SERVER.use(cors());
SERVER.use(express.json());
SERVER.use("/", router);

function APP() {
  SERVER.listen(PORT, () => console.log("server started on port: ", PORT));
}
// EXPORTING DB AND SERVER
module.exports = { DB_CONNECTION, APP };
