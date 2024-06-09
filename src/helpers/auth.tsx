import bcrypt from "bcrypt";

export function verifyPassword(plainPassword: string, hashedPassword: string) {
  return plainPassword === hashedPassword;
}
