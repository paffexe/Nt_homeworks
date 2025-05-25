const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.routes");
const viewRouter = require('./routes/vews.routes');

const errorHandlingMiddleware = require("./middlewares/error/error-handling.middleware");
const exHbs = require("express-handlebars");


const PORT = config.get("port") || 3030;

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(cookieParser());
app.use(express.json());

const hbs = exHbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

// hbs settings
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("views"))

app.use("/", viewRouter);     //frontend
app.use("/api", indexRouter); //backend

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
