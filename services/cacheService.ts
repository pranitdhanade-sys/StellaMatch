import { redis } from '@/services/redis';

export async function cacheProfile(userId: string, payload: unknown) {
  await redis.set(`profile:${userId}`, JSON.stringify(payload), 'EX', 60 * 5);
}

export async function getCachedProfile(userId: string) {
  const raw = await redis.get(`profile:${userId}`);
  return raw ? JSON.parse(raw) : null;
}
