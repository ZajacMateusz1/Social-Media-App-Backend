import express from "express";
import type { Request, Response, NextFunction } from "express";

import usersRoutes from "./routes/users-routes.js";

import { HttpError } from "./models/http-error.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  throw new HttpError("Could not find this route.", 404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(error.status ?? 500)
    .json({ message: error.message ?? "Internal Server Error" });
});

export default app;
