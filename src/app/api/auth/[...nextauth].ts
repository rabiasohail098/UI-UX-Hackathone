import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth"; // Import the User type from next-auth

export const authOptions = {
  providers: [
    // Google Authentication Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // Custom Credentials Authentication
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // Make sure the return type matches NextAuth's User type
      async authorize(credentials): Promise<User | null> {
        if (credentials?.username === "admin" && credentials?.password === "password") {
          // Returning a valid user object matching the expected type
          return {
            id: "1",
            name: "Test User",
            email: "test@example.com",
          };
        } else {
          return null; // Authentication failed
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Using JWT strategy
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
