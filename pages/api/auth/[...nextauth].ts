import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

async function refreshAccessToken(token) {
  try {
    const url =
      "http://192.168.1.44:8080/realms/featureloop/protocol/openid-connect/token?" +
      new URLSearchParams({
        client_id: process.env.FEATURELOOP_CLIENT_ID,
        client_secret: process.env.FEATURELOOP_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
      });

    console.log('url', url, token);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

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
        session.error = token.error;
      }

      return session;
    },
    jwt: async ({ token, user, account }) => {
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user
        }
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  // pages: {
  //   signIn: '/auth/login',
  // }
}

export default NextAuth(authOptions)