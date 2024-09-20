// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the routes that require authentication
const protectedRoutes = ['/dashboard', '/profile', '/settings'];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Check if the requested route is protected
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // Extract the session token using getToken from next-auth/jwt
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If no session exists, redirect to the login page
    if (!session) {
      const loginUrl = new URL('/', req.url);
      loginUrl.searchParams.set('callbackUrl', req.url); // Save the intended route
      return NextResponse.redirect(loginUrl);
    }
  }

  // Continue with the request if the session is valid
  return NextResponse.next();
}

// Configure the matcher to specify which routes to apply the middleware
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};
