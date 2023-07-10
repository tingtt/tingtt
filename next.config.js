/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
