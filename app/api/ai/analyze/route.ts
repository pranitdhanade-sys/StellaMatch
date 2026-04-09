import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { analyzeSkills } from '@/agents/skillAnalyzerAgent';

const analyzeSchema = z.object({
  githubUrl: z.string().url(),
  portfolioLinks: z.array(z.string().url()).default([]),
  skillSignals: z.array(z.object({ skill: z.string(), weight: z.number().min(0).max(100) })).min(1)
});

export async function POST(req: NextRequest) {
  const payload = analyzeSchema.parse(await req.json());
  const analysis = analyzeSkills(payload.skillSignals);

  return NextResponse.json({
    ...analysis,
    repositoriesInspected: ['mock-repo-1', 'mock-repo-2'],
    evaluatedSources: [payload.githubUrl, ...payload.portfolioLinks]
  });
}
