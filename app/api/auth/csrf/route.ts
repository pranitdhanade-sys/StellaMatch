import { NextResponse } from 'next/server';
import { issueCsrfSecret, issueCsrfToken } from '@/utils/csrf';

export async function GET() {
  const secret = issueCsrfSecret();
  const csrfToken = issueCsrfToken(secret);
  const response = NextResponse.json({ csrfToken });
  response.cookies.set('csrf_secret', secret, { httpOnly: true, secure: true, sameSite: 'strict', path: '/' });
  return response;
}
