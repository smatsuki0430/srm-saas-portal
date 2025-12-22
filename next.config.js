/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://*.replit.dev',
    'https://*.replit.app',
    'https://*.repl.co',
  ],
  output: 'standalone',
}

module.exports = nextConfig
