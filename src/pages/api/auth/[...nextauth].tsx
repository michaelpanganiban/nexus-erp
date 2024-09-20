import NextAuth, { SessionStrategy } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { findUserByEmail } from '@/store/actions/api/user';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Username' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: Record<'username' | 'password', string> | undefined) {
                if (!credentials || !credentials.username || !credentials.password) {
                    console.log('Missing credentials');
                    return null;
                }

                const user = await findUserByEmail(credentials.username, credentials.password);
                if (user) {
                return {
                    id: user.userId,
                    name: user.firstName + ' ' + user.lastName,
                    email: user.email,
                };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/',
        error: '/'
    },
    session: {
        strategy: 'jwt' as SessionStrategy,
    },
    callbacks: {
        async jwt({
            token,
            user,
        }: {
            token: any;
            user?: { id: string; name?: string | null; email?: string | null };
            account?: any;
            profile?: any;
            trigger?: 'signIn' | 'signUp' | 'update';
            isNewUser?: boolean;
        }) {
        // Safely check if user exists and handle null/undefined values
            if (user) {
                token.id = user.id;
                token.name = user.name ?? ''; // Default to an empty string if name is null/undefined
                token.email = user.email ?? ''; // Default to an empty string if email is null/undefined
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (token?.id) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
            }
            return session;
        },
        async redirect({ url, baseUrl }: { url: string; baseUrl: string; }) {
            // Check if `url` contains the `callbackUrl`
            if (url.includes('callbackUrl')) {
                // Redirect to the intended page
                const callbackUrl = new URL(url).searchParams.get('callbackUrl') ?? baseUrl;
                return callbackUrl;
            }
    
            // Use base URL if no callbackUrl is present
            return '/dashboard';
        },
    },
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
