import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { hashPassword } from '@/services/authService';

const bodySchema = z.object({ token: z.string().min(8), password: z.string().min(8) });

export async function POST(req: NextRequest) {
  const data = bodySchema.parse(await req.json());
  const passwordHash = await hashPassword(data.password);

  return NextResponse.json({
    reset: true,
    tokenUsed: data.token,
    passwordHashPreview: `${passwordHash.slice(0, 12)}...`
  });
}
