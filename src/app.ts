import express from "express";

import usersRoutes from "./routes/users-routes.js";
import errorHandler from "./middlewares/errorHandler.js";

import { HttpError } from "./errors/http-error.js";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT",
  );
  next();
});
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  throw new HttpError("Could not find this route.", 404);
});

app.use(errorHandler);

export default app;
