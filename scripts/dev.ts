import net from 'node:net';
import { spawn } from 'node:child_process';

const startPort = Number(process.env.PORT || 3000);

async function isPortFree(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => server.close(() => resolve(true)));
    server.listen(port, '0.0.0.0');
  });
}

async function findPort(port: number): Promise<number> {
  let current = port;
  while (!(await isPortFree(current))) current += 1;
  return current;
}

(async () => {
  const freePort = await findPort(startPort);
  if (freePort !== startPort) {
    console.log(`Port ${startPort} busy, using ${freePort}`);
  }
  const child = spawn('next', ['dev', '-p', String(freePort)], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, PORT: String(freePort) }
  });
  child.on('exit', (code) => process.exit(code ?? 0));
})();
