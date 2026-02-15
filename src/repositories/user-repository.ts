import User from "../models/user-model.js";

export const signupRepository = async (
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
