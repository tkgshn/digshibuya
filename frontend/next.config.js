/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // 本番ビルド時に ESLint エラーを無視する設定
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**picsum.photos",
      },
      {
        protocol: "https",
        hostname: "**unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**fbsbx.com",
      },
      {
        protocol: "https",
        hostname: "**twimg.com",
      },
      // 以下は追加
      {
        protocol: "https",
        hostname: "www.digshibuya.jp",
      },
      {
        protocol: "https",
        hostname: "i.gyazo.com",
      },
    ],
  },
}

module.exports = nextConfig
