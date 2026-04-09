import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { cacheProfile, getCachedProfile } from '@/services/cacheService';

const profileSchema = z.object({
  name: z.string().min(2),
  city: z.string().min(2),
  college: z.string().min(2),
  skills: z.array(z.string()).min(1),
  portfolioLinks: z.array(z.string().url()).default([]),
  githubUrl: z.string().url(),
  skillLevelTags: z.array(z.string()).default([]),
  availability: z.array(z.string()).default([]),
  learningGoals: z.array(z.string()).default([])
});

export async function GET() {
  const cached = await getCachedProfile('mock-user-id');
  if (cached) return NextResponse.json({ source: 'cache', ...cached });

  const payload = {
    name: 'Demo Student',
    city: 'Bangalore',
    college: 'Stella Engineering Institute',
    skills: ['React', 'Flutter', 'UI Design'],
    portfolioLinks: ['https://portfolio.example.dev'],
    githubUrl: 'https://github.com/demo-student',
    skillLevelTags: ['Intermediate React', 'Beginner Flutter'],
    availability: ['Mon 18:00-20:00', 'Sat 10:00-12:00'],
    learningGoals: ['Master system design interviews']
  };
  await cacheProfile('mock-user-id', payload);
  return NextResponse.json({
    source: 'origin',
    ...payload
  });
}

export async function POST(req: NextRequest) {
  const parsed = profileSchema.parse(await req.json());
  await cacheProfile('mock-user-id', parsed);
  return NextResponse.json({ saved: true, profile: parsed });
}
