const { spawn } = require('node:child_process');
const { resolvePort } = require('../utils/portManager');

(async () => {
  const preferredPort = Number(process.env.PORT || 3000);
  const selectedPort = await resolvePort(preferredPort);

  const child = spawn('next', ['dev', '-p', String(selectedPort)], {
    shell: true,
    stdio: 'inherit',
    env: { ...process.env, PORT: String(selectedPort) }
  });

  child.on('exit', (code) => process.exit(code || 0));
})();
