import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        try {
          const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }

          const data = await response.json();
          return data.accessToken; 

        } catch (error) {
          console.error('An error occurred during authentication:', error);
          throw new Error('An error occurred during login');
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) { 
      if (user) {
        token.accessToken = user; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token; 
      }
      return session;
    }
  }
});

export default handler;
