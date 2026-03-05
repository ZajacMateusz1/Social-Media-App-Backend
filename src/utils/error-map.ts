import { HttpError } from "../errors/http-error.js";
import { z, ZodError } from "zod";
import { mongo } from "mongoose";
const mapToHTTPError = (error: unknown): HttpError => {
  if (error instanceof HttpError) return error;

  if (error instanceof ZodError) {
    return new HttpError(
      "Validation failed, try again",
      422,
      z.formatError(error),
    );
  }

  if (error instanceof mongo.MongoServerError && error.code === 11000) {
    return new HttpError("Resource already exists", 409);
  }
  return new HttpError("Internal Server Error", 500);
};
export default mapToHTTPError;
