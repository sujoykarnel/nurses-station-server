// External Modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Internal Modules
const { errorHandler } = require("./middlewares/common/errorHandler");
const usersRouter = require("./router/usersRouter");

const app = express();
dotenv.config();

// Database connection

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));

// Request parsers

app.use(express.json());

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// router setup
app.use("/users", usersRouter);
// app.use("/services", servicesRouter);

// error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`listing port : ${process.env.PORT}`);
});
