/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true ,
  }
    
}

module.exports = nextConfig
