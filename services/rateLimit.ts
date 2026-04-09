import { RateLimiterMemory } from 'rate-limiter-flexible';

export const authLimiter = new RateLimiterMemory({
  points: 20,
  duration: 60
});
