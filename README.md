# StellaMatch

StellaMatch is a full-stack marketplace for peer skill exchange and real-time learning sessions.

## Features
- User authentication and profile management
- AI-assisted skill analysis and student matching
- Session scheduling and dashboard/admin surfaces
- Production-oriented infrastructure and compliance files

## Installation
```bash
npm install
cp .env.example .env
npm run dev
```

## Environment Setup
Use the following files:
- `.env.example` for baseline values
- `.env.development` for local development
- `.env.production` for production deployments

Required variables:
- `PORT`
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `API_BASE_URL`
- `NODE_ENV`

## Docker Usage
```bash
docker-compose up --build
```

Services included:
- `app` (Next.js server)
- `postgres` (PostgreSQL)
- `redis` (cache/session store)

## Testing
```bash
npm test
```

Example tests live in `tests/` and include unit, API utility, and component coverage.

## Deployment Steps
1. Build image: `docker build -t stellamatch .`
2. Set production env values in `.env.production`
3. Run migrations/seed data
4. Start services with docker compose or your orchestrator
5. Verify logs in `/logs`

## Legal Documents
- `legal/privacy-policy.md`
- `legal/terms-and-conditions.md`
- `legal/cookie-policy.md`
- `legal/disclaimer.md`

## Infrastructure and Config Highlights
- Port fallback: `utils/portManager.js`
- Logging: `config/logger.js`
- Redis config: `config/redis.js`
- Security middleware config: `config/security.js`
- Performance middleware config: `config/performance.js`
- Error handling helpers: `utils/errorHandler.js`

## License
MIT (see `LICENSE`).
