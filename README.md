# SkillSwap Nexus

SkillSwap Nexus is an AI-powered, full-stack knowledge-barter marketplace where engineering students in the same city exchange skills instead of money.

## Core capabilities

- Secure auth with signup, login, logout, refresh, forgot/reset password, and email verification placeholders.
- Student profiles with city, college, skills, links, skill tags, availability, and learning goals.
- AI skill analyzer endpoint with dynamic skill-value scoring and confidence.
- Matching engine with compatibility score and explainable factors.
- Real-time session scheduling placeholder for 1:1 learning sessions.
- Marketplace dashboard + admin control deck scaffold.
- Cinematic 2.5D UI theme with floating magical-tech elements and a robotic mentor mascot.

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, Zustand.
- **Backend:** Next.js API Routes (REST), JWT auth.
- **Data:** PostgreSQL + Prisma ORM.
- **Cache/Queue:** Redis + BullMQ-ready setup.
- **Realtime:** Socket.io service scaffold.
- **Quality:** Jest + React Testing Library, ESLint, Prettier, Husky, Commitlint.
- **Ops:** Docker, docker-compose, GitHub Actions CI.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

If port `3000` is in use, the app auto-selects the next free port.

## Docker run

```bash
docker-compose up --build
```

## Important directories

- `app/` - App Router pages + API routes
- `components/` - UI components
- `animations/` - reusable motion/visual effects
- `agents/` - AI analyzer logic placeholder
- `services/` - auth, matching, queue, redis, realtime
- `utils/` - jwt, env, logger, csrf
- `tests/` - unit and component tests
- `database/` - Prisma schema + seed
- `config/legal/` - privacy, terms, cookie policy

## Security defaults

- HTTP-only secure refresh token cookie
- SameSite strict cookies
- CSRF token issuance and verification on refresh
- Bcrypt password hashing
- Helmet-friendly middleware headers
- Rate limiting service hook
- Prisma ORM for SQL injection safety

## SEO + legal

- `public/sitemap.xml`
- `public/robots.txt`
- `config/legal/privacy-policy.md`
- `config/legal/terms-and-conditions.md`
- `config/legal/cookie-policy.md`

## Current status

This repository is a production-oriented scaffold with working auth/session/profile/matching APIs, tests, and deploy tooling; replace placeholder AI/video/email integrations when wiring external providers.
