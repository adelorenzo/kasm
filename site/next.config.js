/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'adelorenzo Technologies',
    description: 'The official store for adelorenzo kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://adelorenzo.github.io/kasm/',
    contactUrl: 'https://github.com/adelorenzo/kasm/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
