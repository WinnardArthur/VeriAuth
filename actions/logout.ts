"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // Some server stuff before logout
  await signOut();
};
