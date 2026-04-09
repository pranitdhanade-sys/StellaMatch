import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const querySchema = z.object({ token: z.string().min(8) });

export async function GET(req: NextRequest) {
  const parsed = querySchema.parse({ token: req.nextUrl.searchParams.get('token') });
  return NextResponse.json({ verified: true, token: parsed.token });
}
