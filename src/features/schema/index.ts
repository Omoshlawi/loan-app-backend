import { z } from "zod";

export const RegisterSchema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    password: z.string().min(4),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });

export const ProfileSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  gender: z.enum(["MALE", "FEMALE"]),
});

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(4),
});
