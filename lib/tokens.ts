import { v4 as uuidv4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verification-token";

import { db } from "./db";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4(); 

  const expires = new Date(new Date().getTime() + 3600 * 1000);

  //   Check if token has already been generated/exists for this email
  const existingToken = await getVerificationTokenByEmail({ email });

  //   If token already exists, delete it
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  //   Create / Generate a new token
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
