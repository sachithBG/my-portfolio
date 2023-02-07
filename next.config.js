/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    loader: 'akamai',
    path:''
  },
  basePath: '/my-portfolio',
}

module.exports = nextConfig
