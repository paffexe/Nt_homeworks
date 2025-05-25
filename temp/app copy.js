const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const indexRouter = require("../routes/index.routes");
const errorHandlingMiddleware = require("../middlewares/error/error-handling.middleware");
const logger = require("../services/logger.service");

const PORT = config.get("port") || 3030;

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

// exchanging values
// console.log(process.env.NODE_ENV);
// console.log(process.env.secret_token);
// console.log(config.get("secret_token"));

// custom errors
process.on("uncaughtException", (exception) => {
  console.log("uncaughtException", exception.message);
});

process.on("unhandledRejection", (rejection) => {
  console.log("uncaughtException: ", rejection);
});

// express winston
const winston = require("winston");
const expressWinston = require("express-winston");
const requestLogger = require("../middlewares/loggers/request.logger");
const requestErrorLogger = require("../middlewares/loggers/request.error.logger");

// logs wiston and normal
// logger.log("info","Oddiy LOG ma'lumoti"); //universal
// logger.error("Error ma'lumoti");
// logger.debug("Debug ma'lumti");
// logger.warn("Warn ma'lumoti");
// logger.info("Info ma'lumoti");

// console.trace("Trace ma'lumoti");
// console.table(["js", "python", "java"]);
// console.table([
//   ["karim", 5],
//   ["salim", 2],
//   ["valim", 3],
// ]);

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

app.use("/api", indexRouter);
4
app.use(requestErrorLogger);

app.use(errorHandlingMiddleware); // error handling eng oxirida

async function start() {
  try {
    const uri = config.get("dbUri");
    await mongoose.connect(uri);

    app.listen(PORT, () => {
      console.log(`Server running at port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
