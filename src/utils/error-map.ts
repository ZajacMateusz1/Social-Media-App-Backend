import { HttpError } from "../errors/http-error.js";
import { ZodError } from "zod";
const mapToHTTPError = (error: unknown): HttpError => {
  if (error instanceof HttpError) return error;

  if (error instanceof ZodError) {
    return new HttpError("Validation failed, try again", 400);
  }

  if ((error as any).code === 11000) {
    return new HttpError("Resource already exists", 409);
  }

  if ((error as any).name === "ValidationError") {
    return new HttpError("Validation error", 400);
  }

  return new HttpError("Internal Server Error", 500);
};
export default mapToHTTPError;
