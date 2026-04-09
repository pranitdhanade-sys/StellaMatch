import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { verifyRefreshToken, signAccessToken } from '@/utils/jwt';
import { verifyCsrfToken } from '@/utils/csrf';

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get('refresh_token')?.value;
  const csrfSecret = req.cookies.get('csrf_secret')?.value;
  const csrfToken = req.headers.get('x-csrf-token');

  if (!refreshToken || !csrfSecret || !csrfToken || !verifyCsrfToken(csrfSecret, csrfToken)) {
    return NextResponse.json({ error: 'Invalid CSRF or refresh token.' }, { status: 401 });
  }

  try {
    const payload = verifyRefreshToken(refreshToken);
    const accessToken = signAccessToken(payload);
    return NextResponse.json({ accessToken });
  } catch {
    return NextResponse.json({ error: 'Refresh token invalid or expired.' }, { status: 401 });
  }
}
