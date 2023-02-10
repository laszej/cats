const { default: build } = require('next/dist/build')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
}

module.exports = nextConfig



