import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({ email: z.string().email() });

export async function POST(req: NextRequest) {
  const data = bodySchema.parse(await req.json());
  return NextResponse.json({
    email: data.email,
    message: 'If this email exists, a reset link has been sent.',
    resetTokenPreview: 'mock-reset-token'
  });
}
