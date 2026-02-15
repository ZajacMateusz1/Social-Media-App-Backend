import type { Request, Response, NextFunction } from "express";
import { signupService } from "../services/users-service.js";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password, name, lastName } = req.body;
  try {
    const createdUser = await signupService(email, password, name, lastName);
    res.status(201).json(createdUser);
  } catch (error) {
    return next(error);
  }
};
export const login = (req: Request, res: Response, next: NextFunction) => {};
