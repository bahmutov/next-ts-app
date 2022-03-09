// https://github.com/cypress-io/commit-info
const {getBranch, getSha} = require('@cypress/commit-info')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // make sure to use Vercel variables if available
    // https://vercel.com/docs/concepts/projects/environment-variables
    const branch = process.env.VERCEL_GIT_COMMIT_REF || await getBranch() || 'unknown branch'
    const sha = process.env.VERCEL_GIT_COMMIT_SHA || await getSha() || 'unknown sha'
    const buildId = `${branch}:::${sha}`
    console.log('generated build id "%s"', buildId)
    return buildId
  }
}

module.exports = nextConfig
