import { UserRole } from "@prisma/client";
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
  code: z.string().optional(),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(1, { message: "Minimum of 6 characters required" }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.boolean().optional(),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string()),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required",
      path: ["password"],
    }
  );
