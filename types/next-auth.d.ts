// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string; // Extend the session with accessToken
    username?: string; // Add username as optional
  }

  interface Token {
    username: string; // Extend the token with username
  }
}
