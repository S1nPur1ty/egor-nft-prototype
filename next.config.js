/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  future: {
    webpack5: true
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    return config;
  },
  images: {
    domains: ['gateway.pinata.cloud'],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig
