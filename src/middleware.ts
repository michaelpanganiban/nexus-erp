// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the routes that require authentication
const protectedRoutes = ['/dashboard', '/profile', '/settings', '/inventory', '/users'];

export async function middleware (req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Extract the session token using getToken from next-auth/jwt
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If user is logged in and tries to access login page ('/'), redirect to dashboard
  if (session && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Check if the requested route is protected
  if (!session && protectedRoutes.some((route) => pathname.startsWith(route))) {
    // If no session exists, redirect to the login page with the current URL as the callback
    const loginUrl = new URL('/', req.url); // Ensure you're redirecting to the correct login page
    const callbackUrl = req.nextUrl.href; // Use `href` for the full URL
    loginUrl.searchParams.set('callbackUrl', callbackUrl); // Don't encode here, NextAuth will handle it
    return NextResponse.redirect(loginUrl);
  }

  // Continue with the request if the session is valid or the route is not protected
  return NextResponse.next();
}

// Configure the matcher to specify which routes to apply the middleware
export const config = {
  matcher: ['/', '/dashboard/:path*', '/profile/:path*', '/settings/:path*', '/inventory', '/inventory/:path*', '/users/:path*'],
};
