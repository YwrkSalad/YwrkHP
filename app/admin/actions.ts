"use server";

const TOKEN = "ywrk-admin-authenticated";

export async function loginAdmin(password: string): Promise<string | null> {
  if (password === process.env.ADMIN_PASSWORD) return TOKEN;
  return null;
}

export async function verifyToken(token: string): Promise<boolean> {
  return token === TOKEN;
}
