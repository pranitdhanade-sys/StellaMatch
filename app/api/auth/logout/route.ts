import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ logout: true });
  response.cookies.set('refresh_token', '', { httpOnly: true, sameSite: 'strict', secure: true, maxAge: 0, path: '/' });
  response.cookies.set('csrf_secret', '', { httpOnly: true, sameSite: 'strict', secure: true, maxAge: 0, path: '/' });
  return response;
}
