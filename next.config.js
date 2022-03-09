const {getBranch, getSha} = require('@cypress/commit-info')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    const branch = await getBranch() || 'unknown branch'
    const sha = await getSha() || 'unknown sha'
    const buildId = `${branch}:::${sha}`
    console.log('generated build id "%s"', buildId)
    return buildId
  }
}

module.exports = nextConfig
