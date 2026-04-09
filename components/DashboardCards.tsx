import { FloatingOrb } from '@/animations/FloatingOrb';

const cards = [
  { title: 'Skill Value', content: 'React +78, Flutter +62, System Design +81' },
  { title: 'Learning Streak', content: '9 day streak, +12 trust this week' },
  { title: 'Upcoming Session', content: 'Today 18:30 — UI Design exchange' },
  { title: 'Matches', content: '4 high-compatibility mentors in your city' },
  { title: 'Notifications', content: '2 match invites, 1 session reminder' },
  { title: 'Session History', content: '18 completed sessions • 4.8 avg rating' }
];

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <article key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">{card.title}</h3>
            <FloatingOrb />
          </div>
          <p className="text-sm text-white/80">{card.content}</p>
        </article>
      ))}
    </div>
  );
}
