import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ users: [{ id: '1', email: 'student@stella.dev', trustScore: 88 }] });
}
