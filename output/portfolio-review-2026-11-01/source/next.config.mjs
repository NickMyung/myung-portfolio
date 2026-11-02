/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow an isolated review build while a development server is running.
  distDir: process.env.PORTFOLIO_BUILD_DIR || '.next',
  optimizeFonts: false,
  transpilePackages: ['three'],
};

export default nextConfig;
