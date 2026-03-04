import type { Request, Response, NextFunction } from "express";
import mapToHTTPError from "../utils/error-map.js";

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(error);
  }
  console.error(error);
  const mappedError = mapToHTTPError(error);
  return res
    .status(mappedError.status)
    .json({ message: mappedError.message, details: mappedError.details });
};

export default errorHandler;
