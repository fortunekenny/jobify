// IMPORTS
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";

// IMPORT END

//MIDDLEWARE

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());

//MIDDLEWARE ENDS

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);

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
