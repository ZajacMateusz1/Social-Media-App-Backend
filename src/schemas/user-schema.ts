import { z } from "zod";

const UserSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8)
    .refine((val) => /[a-zA-Z]/.test(val))
    .refine((val) => /\d/.test(val)),
  name: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
});

export default UserSchema;
