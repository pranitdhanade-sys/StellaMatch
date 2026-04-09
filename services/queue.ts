import { Queue } from 'bullmq';
import { redis } from '@/services/redis';

export const notificationQueue = new Queue('notifications', {
  connection: redis
});
