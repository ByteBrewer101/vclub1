import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken"; // Ensure this is installed

const handler = NextAuth({
  providers: [
    GithubProvider({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      clientId: process.env.GITHUB_ID,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // If user is available, we can assign a new JWT
      if (user) {
        console.log(user);
        token.urlfile = jwt.sign(
          { user },
          process.env.JWT_SECRET || "secret" // Use a secure secret
        );

        console.log(token);
      }

      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      // Ensure the token has the jwt property set

      session.accessToken = token.urlfile as string; // Set the JWT token to session.accessToken

      console.log(session.accessToken);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
