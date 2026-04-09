import { calculateCompatibility, explainMatch } from '@/services/matchingEngine';

describe('matching engine', () => {
  it('returns high score for strong complement and city match', () => {
    const score = calculateCompatibility({
      learnerSkills: ['React'],
      mentorSkills: ['React', 'System Design', 'Flutter'],
      sameCity: true,
      availabilityOverlap: 4
    });

    expect(score).toBeGreaterThan(70);
    expect(explainMatch(score)).toContain('High');
  });
});
