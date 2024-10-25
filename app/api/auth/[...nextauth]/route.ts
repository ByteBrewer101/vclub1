import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    LinkedInProvider({
      clientId: "process.env.LINKEDIN_CLIENT_ID",
      clientSecret: "process.env.LINKEDIN_CLIENT_SECRET",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };



