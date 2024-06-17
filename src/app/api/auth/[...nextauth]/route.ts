import NextAuth from "next-auth/next";
import { authOptions } from "./options";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}