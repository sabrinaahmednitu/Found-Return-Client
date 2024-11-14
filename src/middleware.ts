import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AuthRoutes = ['/login', '/register'];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);

  // if (!user) {
  //   if(AuthRoutes.includes(pathname))
  // }

  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile', '/admin', '/login', '/register'],
};
