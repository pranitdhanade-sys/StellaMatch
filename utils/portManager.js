const detect = require('detect-port');

async function resolvePort(preferredPort = 3000) {
  const freePort = await detect(preferredPort);
  if (Number(freePort) !== Number(preferredPort)) {
    console.warn(`[port-manager] Port ${preferredPort} in use. Falling back to ${freePort}.`);
  } else {
    console.info(`[port-manager] Using port ${freePort}.`);
  }
  return Number(freePort);
}

module.exports = {
  resolvePort
};
