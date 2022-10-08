import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.FEATURELOOP_CLIENT_ID,
      clientSecret: process.env.FEATURELOOP_CLIENT_SECRET,
      issuer: process.env.FEATURELOOP_CLIENT_ISSUER
    })
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true
}

export default NextAuth(authOptions)