import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    users: [
      { id: '1', email: 'student@skillswap.dev', trustScore: 88, status: 'active' },
      { id: '2', email: 'mentor@skillswap.dev', trustScore: 92, status: 'active' }
    ],
    sessionsOnline: 6,
    reportCount: 1
  });
}
