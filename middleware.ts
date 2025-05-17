import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value; 
  const userRole = req.cookies.get('role')?.value; 

  const publicOnlyRoutes = ['/', '/login', '/register'];
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];
  const adminRoutes = ['/admin'];
  

  if (publicOnlyRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (protectedRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (adminRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    if (userRole !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  return NextResponse.next(); 
}


export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/dashboard',
    '/profile',
    '/settings',
    '/admin',
  ],
};
