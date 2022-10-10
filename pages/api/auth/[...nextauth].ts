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
        session.accessToken = token.accessToken;
      }

      return session;
    },
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.id = user.id;
      }

      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/auth/login',
  }
}

export default NextAuth(authOptions)