export type MatchInput = {
  learnerSkills: string[];
  mentorSkills: string[];
  sameCity: boolean;
  availabilityOverlap: number;
};

export function calculateCompatibility(input: MatchInput): number {
  const skillGap = input.mentorSkills.filter((skill) => !input.learnerSkills.includes(skill)).length;
  const cityBoost = input.sameCity ? 20 : 0;
  const availability = Math.min(30, input.availabilityOverlap * 10);
  return Math.max(0, Math.min(100, skillGap * 12 + cityBoost + availability));
}

export function explainMatch(score: number): string {
  if (score > 80) return 'High match: strong skill complement and aligned schedules.';
  if (score > 60) return 'Good match: meaningful skill exchange potential.';
  return 'Moderate match: useful, but limited overlap.';
}
