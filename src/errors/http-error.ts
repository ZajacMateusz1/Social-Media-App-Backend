import { z } from "zod";
export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: z.core.$ZodFormattedError<string, string>,
  ) {
    super(message);
  }
}
