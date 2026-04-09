import { NextRequest, NextResponse } from 'next/server';
import { calculateCompatibility, explainMatch } from '@/services/matchingEngine';

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const score = calculateCompatibility(payload);
  return NextResponse.json({ score, explanation: explainMatch(score) });
}
