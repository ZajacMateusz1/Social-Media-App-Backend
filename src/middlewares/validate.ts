import type { ZodObject } from "zod";
import type { Request, Response, NextFunction } from "express";
const validate = (Schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      Schema.parse(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
