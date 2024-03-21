import NextAuth, { type DefaultSession } from "next-auth";

import { UserRole } from "@prisma/client";

// Add new fields to session callback
export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// Add new fields to jwt callback
import { JWT } from "@auth/core/jwt";

declare module "@auth/core/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
