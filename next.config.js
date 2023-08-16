/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "use-client",
        {
          include: ["antd/"],
        },
      ],
    ],
  },
}

module.exports = nextConfig
