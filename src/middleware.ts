import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AuthRoutes = ['/login', '/register'];

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   const user = undefined;

//   if (!user) {
//     if(AuthRoutes.includes(pathname))
//   } else {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile', '/admin'],
};
