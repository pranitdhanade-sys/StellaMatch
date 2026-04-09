import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Demo Student',
    city: 'Bangalore',
    college: 'Stella Engineering Institute',
    skills: ['React', 'Flutter', 'UI Design'],
    learningGoals: ['Master system design interviews']
  });
}
