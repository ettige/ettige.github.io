/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
    output: isGitHubActions ? 'export' : undefined
};


module.exports = nextConfig

