import { HttpError } from "../errors/http-error.js";
import User from "../models/user-model.js";

export const registerRepository = async (
  email: string,
  hashedPassword: string,
  name: string,
  lastName: string,
) => {
  const user = new User({
    email,
    hashedPassword,
    name,
    lastName,
  });
  const createdUser = await user.save();
  return {
    id: createdUser._id,
    email: createdUser.email,
    name: createdUser.name,
    lastName: createdUser.lastName,
  };
};

export const loginRepository = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new HttpError("Invalid email or password", 401);
  }
  return user;
};
