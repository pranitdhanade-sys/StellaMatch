import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  hostId: z.string().min(3),
  learnerId: z.string().min(3),
  startsAt: z.string(),
  topic: z.string().min(2)
});

export async function POST(req: NextRequest) {
  const payload = bodySchema.parse(await req.json());
  return NextResponse.json({
    scheduled: true,
    provider: 'websocket-video-placeholder',
    session: { id: 'mock-session-001', ...payload, status: 'scheduled' }
  });
}
