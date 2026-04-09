import Tokens from 'csrf';

const tokens = new Tokens();

export function issueCsrfSecret() {
  return tokens.secretSync();
}

export function issueCsrfToken(secret: string) {
  return tokens.create(secret);
}

export function verifyCsrfToken(secret: string, token: string) {
  return tokens.verify(secret, token);
}
