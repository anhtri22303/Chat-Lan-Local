const https = require('https');

// Keep-alive script để tránh Replit sleep
// Ping server mỗi 5 phút
setInterval(() => {
  // Prefer platform-provided URL and port
  const port = process.env.PORT || process.env.SERVER_PORT || 13050;
  const host = process.env.REPL_SLUG && process.env.REPL_OWNER
    ? `${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    : `localhost:${port}`;
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  const url = `${protocol}://${host}/health`;

  // Use http or https based on protocol
  const client = protocol === 'https' ? require('https') : require('http');
  client.get(url, (res) => {
    console.log(`Keep-alive ping sent to ${url} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.log('Keep-alive ping failed:', err.message);
  });
}, 5 * 60 * 1000); // 5 minutes

console.log('Keep-alive script started');