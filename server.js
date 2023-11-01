// IMPORTS
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import { validateTest } from "./middleware/validationMiddleware.js";

//
import jobRouter from "./routes/jobRouter.js";

// IMPORT END

//MIDDLEWARE

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//MIDDLEWARE ENDS

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/test", validateTest, (req, res) => {
  const { name } = req.body;
  res.json({ msg: `hello ${name}` });
});

app.use("/api/v1/jobs", jobRouter);

// Not Found Middleware

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// Error Middleware

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
