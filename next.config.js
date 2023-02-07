/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    loader: 'akamai'
  },
  basePath: '/my-portfolio',
}

module.exports = nextConfig
