import { NextRequest, NextResponse } from 'next/server';
import { calculateCompatibility, explainMatch } from '@/services/matchingEngine';

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const score = calculateCompatibility(payload);
  return NextResponse.json({
    score,
    explanation: explainMatch(score),
    factors: {
      sameCity: payload.sameCity,
      availabilityOverlap: payload.availabilityOverlap,
      skillGap: payload.mentorSkills.filter((skill: string) => !payload.learnerSkills.includes(skill)).length
    },
    suggestions: [
      { userId: 'mentor-react-001', compatibility: score, city: 'Same city', reason: 'Strong React and System Design overlap.' },
      { userId: 'mentor-ui-002', compatibility: Math.max(55, score - 9), city: 'Same city', reason: 'Balanced UI-to-frontend exchange.' }
    ]
  });
}
