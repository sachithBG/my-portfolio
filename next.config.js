/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    domains: [],
  },
  basePath: '/my-portfolio',
}

module.exports = nextConfig
