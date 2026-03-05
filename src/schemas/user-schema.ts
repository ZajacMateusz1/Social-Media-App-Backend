import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { error: "Min password length is 8" })
    .regex(/[a-zA-Z]/, {
      error: "Password must contain letter",
    })
    .regex(/\d/, {
      error: "Password must contain a number",
    }),
  name: z.string().trim().min(1, { error: "Min length is 1 character" }),
  lastName: z.string().trim().min(1, { error: "Min length is 1 character" }),
});

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});
