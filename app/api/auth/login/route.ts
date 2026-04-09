import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { issueTokens } from '@/services/authService';

const bodySchema = z.object({ email: z.string().email(), password: z.string().min(8) });

export async function POST(req: NextRequest) {
  const data = bodySchema.parse(await req.json());
  const tokens = issueTokens('mock-user-id', data.email);
  const res = NextResponse.json({ accessToken: tokens.accessToken });
  res.cookies.set('refresh_token', tokens.refreshToken, { httpOnly: true, sameSite: 'strict', secure: true });
  return res;
}
