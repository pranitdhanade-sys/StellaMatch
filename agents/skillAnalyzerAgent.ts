export type SkillSignal = { skill: string; weight: number };

const scoreMap: Record<string, number> = {
  flutter: 40,
  react: 50,
  'system design': 80,
  'ui design': 35,
  'vibe coding': 20
};

export function analyzeSkills(signals: SkillSignal[]) {
  const skillRating = signals.reduce((acc, signal) => {
    const base = scoreMap[signal.skill.toLowerCase()] ?? 10;
    return acc + base + signal.weight;
  }, 0);

  return {
    skillRating,
    confidence: Math.min(0.98, 0.55 + signals.length * 0.07),
    suggestedPartners: ['frontend mentor', 'mobile architect', 'ui specialist']
  };
}
