import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { hashPassword, issueTokens } from '@/services/authService';

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  city: z.string().min(2)
});

export async function POST(req: NextRequest) {
  const data = bodySchema.parse(await req.json());
  const passwordHash = await hashPassword(data.password);

  // TODO: persist user in Prisma
  const tokens = issueTokens('mock-user-id', data.email);

  const res = NextResponse.json({
    user: { id: 'mock-user-id', email: data.email, name: data.name, city: data.city },
    verificationRequired: true
  });

  res.cookies.set('refresh_token', tokens.refreshToken, { httpOnly: true, sameSite: 'strict', secure: true });
  return res;
}
