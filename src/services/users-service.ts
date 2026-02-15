import bcrypt from "bcrypt";

import { signupRepository } from "../repositories/user-repository.js";

export const signupService = async (
  email: string,
  password: string,
  name: string,
  lastName: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const createdUser = await signupRepository(
    email,
    hashedPassword,
    name,
    lastName,
  );
  return createdUser;
};
