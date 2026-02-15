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
    res.status(201).json({
      id: createdUser._id,
      email: createdUser.email,
      name: createdUser.name,
      lastName: createdUser.lastName,
    });
  } catch (error) {
    return next(error);
  }
};
export const login = (req: Request, res: Response, next: NextFunction) => {};
