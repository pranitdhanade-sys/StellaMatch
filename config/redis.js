const Redis = require('ioredis');

function createRedisClient(url = process.env.REDIS_URL) {
  const redis = new Redis(url, {
    maxRetriesPerRequest: 5,
    retryStrategy(times) {
      return Math.min(times * 200, 3000);
    }
  });

  redis.on('connect', () => console.info('[redis] connected'));
  redis.on('error', (err) => console.error('[redis] error', err.message));

  return redis;
}

async function cacheSet(redis, key, value, ttlSeconds = 300) {
  await redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
}

async function cacheGet(redis, key) {
  const raw = await redis.get(key);
  return raw ? JSON.parse(raw) : null;
}

module.exports = {
  createRedisClient,
  cacheSet,
  cacheGet
};
