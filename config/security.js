const helmet = require('helmet');
const cors = require('cors');
const Tokens = require('csrf');
const { RateLimiterMemory } = require('rate-limiter-flexible');

const limiter = new RateLimiterMemory({ points: 100, duration: 60 });
const csrf = new Tokens();

const corsMiddleware = cors({
  origin: process.env.API_BASE_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

function rateLimitMiddleware(req, res, next) {
  const key = req.ip || 'global';
  limiter
    .consume(key)
    .then(() => next())
    .catch(() => res.status(429).json({ error: 'Too many requests' }));
}

function issueCsrfSecret() {
  return csrf.secretSync();
}

function issueCsrfToken(secret) {
  return csrf.create(secret);
}

function verifyCsrfToken(secret, token) {
  return csrf.verify(secret, token);
}

module.exports = {
  helmetMiddleware: helmet(),
  corsMiddleware,
  rateLimitMiddleware,
  issueCsrfSecret,
  issueCsrfToken,
  verifyCsrfToken
};
