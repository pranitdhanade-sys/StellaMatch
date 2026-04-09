const { resolvePort } = require('../utils/portManager');

describe('api utility example', () => {
  it('resolves an available port', async () => {
    const port = await resolvePort(3000);
    expect(port).toBeGreaterThan(0);
  });
});
