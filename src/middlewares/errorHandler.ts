import type { Request, Response, NextFunction } from "express";
import mapToHTTPError from "../utils/error-map.js";

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(error);
  const mappedError = mapToHTTPError(error);
  return res.status(mappedError.status).json({ message: mappedError.message });
};

export default errorHandler;
