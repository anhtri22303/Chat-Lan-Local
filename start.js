const { spawn } = require('child_process');

// Start keep-alive and server as child processes and forward output
function startProcess(command, args, name) {
  const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'] });

  child.stdout.on('data', (data) => {
    process.stdout.write(`[${name}] ${data}`);
  });
  child.stderr.on('data', (data) => {
    process.stderr.write(`[${name}][ERR] ${data}`);
  });
  child.on('close', (code, signal) => {
    console.log(`${name} exited with code=${code} signal=${signal}`);
  });
  return child;
}

console.log('Starting keep-alive and server...');
const keepAlive = startProcess('node', ['keep-alive.js'], 'keep-alive');
const server = startProcess('node', ['server/server.js'], 'server');

function shutdown() {
  console.log('Shutting down children...');
  if (keepAlive && !keepAlive.killed) keepAlive.kill('SIGTERM');
  if (server && !server.killed) server.kill('SIGTERM');
  setTimeout(() => process.exit(0), 1000);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
process.on('exit', shutdown);
