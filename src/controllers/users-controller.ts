import type { Request, Response, NextFunction } from "express";
import { registerService, loginService } from "../services/users-service.js";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password, name, lastName } = req.body;
    const registerResponse = await registerService(
      email,
      password,
      name,
      lastName,
    );
    res.status(201).json(registerResponse);
  } catch (error) {
    return next(error);
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const loginResponse = await loginService(email, password);
    res.json(loginResponse);
  } catch (error) {
    next(error);
  }
};
