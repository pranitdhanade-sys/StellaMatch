import { hashPassword, verifyPassword } from '@/services/authService';

describe('auth service', () => {
  it('hashes and verifies passwords', async () => {
    const hash = await hashPassword('supersecret123');
    await expect(verifyPassword('supersecret123', hash)).resolves.toBe(true);
  });
});
