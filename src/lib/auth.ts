import { NextRequest } from "next/server";
import { connectDB } from "./db";
import User from "@/models/User";

export async function getUserFromRequest(req: NextRequest) {
  const userId = req.headers.get("user-id");

  if (!userId) {
    return null;
  }

  await connectDB();

  const user = await User.findById(userId);
  return user;
}

export function hasRole(userRole: string | undefined, ...roles: string[]) {
  return roles.includes(userRole ?? "");
}