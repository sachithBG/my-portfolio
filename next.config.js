/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
  },
  basePath: '/my-portfolio',
}

module.exports = nextConfig
