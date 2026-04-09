# Stella Match

Stella Match is an AI-powered skill-exchange marketplace for engineering students in the same city. It includes auth, profile/matching APIs, dashboard UI, AI placeholder agents, queue/cache-ready architecture, and DevOps scaffolding.

## Stack
- Next.js App Router + TypeScript + Tailwind + Framer Motion + Zustand-ready structure
- PostgreSQL + Prisma
- Redis + BullMQ-ready services
- JWT auth + HTTP-only cookie refresh token handling
- Jest + RTL tests
- Docker + GitHub Actions CI

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```

Port fallback is automatic via `scripts/dev.ts`.

## Docker
```bash
docker-compose up --build
```

## Implemented modules
- Authentication API skeleton (`/app/api/auth/*`)
- AI Skill Analyzer Agent (`/agents/skillAnalyzerAgent.ts`)
- Matching engine (`/services/matchingEngine.ts`)
- Animated cinematic hero and dashboard cards
- Admin dashboard placeholder
- Prisma schema, seed, and indexing
- Logging with Winston + rotation
- Legal documents in `/config/legal`
- SEO assets in `/public`

## Security notes
- Bcrypt password hashing service
- Zod input validation
- Helmet/rate-limiting service hooks
- Secure cookie defaults (`httpOnly`, `sameSite=strict`, `secure`)

## Future extension points
- Replaceable AI model provider in `/agents`
- Queue workers under `/services/queue`
- Socket session orchestration in `/services/realtime`
