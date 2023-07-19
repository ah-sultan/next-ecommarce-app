/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
          },
          {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
          },
        ],
      },
}

module.exports = nextConfig
