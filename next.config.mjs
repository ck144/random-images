/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static exports
  distDir: 'build', // This matches Render's expectations
  images: {
    unoptimized: true, // Required for static exports
  },
}

module.exports = nextConfig