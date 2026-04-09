import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ scheduled: true, provider: 'websocket-video-placeholder' });
}
