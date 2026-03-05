import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  registerRepository,
  loginRepository,
} from "../repositories/user-repository.js";
import { HttpError } from "../errors/http-error.js";
import { env } from "../config/env.js";

export const registerService = async (
  email: string,
  password: string,
  name: string,
  lastName: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const createdUser = await registerRepository(
    email,
    hashedPassword,
    name,
    lastName,
  );
  const token = jwt.sign(
    { userId: createdUser.id, userEmail: createdUser.email },
    env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
  return token;
};

export const loginService = async (email: string, password: string) => {
  const user = await loginRepository(email);
  const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
  if (!isValidPassword) {
    throw new HttpError("Invalid email or password", 401);
  }
  const token = jwt.sign(
    { userId: user.id, userEmail: user.email },
    env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
  return token;
};
