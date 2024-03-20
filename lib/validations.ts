import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email({ message: "email is required" }),
  password: z
    .string()
    .min(6, { message: "password should be more than 6 characters" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(1, { message: "Minimum of 6 characters required" }),
});
