import { NextResponse } from 'next/server';

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === '/volunteer') {
    return NextResponse.redirect('http://www.boysqafrica.org/volunteer');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/volunteer'],
};