import User from "../models/user-model.js";

export const signupRepository = async (
  email: string,
  hashedPassword: string,
  name: string,
  lastName: string,
) => {
  const createdUser = new User({
    email,
    hashedPassword,
    name,
    lastName,
  });
  return createdUser.save();
};
