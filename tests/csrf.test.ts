import { issueCsrfSecret, issueCsrfToken, verifyCsrfToken } from '@/utils/csrf';

describe('csrf utility', () => {
  it('creates and validates csrf token', () => {
    const secret = issueCsrfSecret();
    const token = issueCsrfToken(secret);
    expect(verifyCsrfToken(secret, token)).toBe(true);
    expect(verifyCsrfToken(secret, 'invalid-token')).toBe(false);
  });
});
