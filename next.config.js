const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.REACT_APP_BUNDLE_VISUALIZE === '1'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: false,
    distDir: '.next',
    generateEtags: false,
    pageExtensions: ['tsx', 'ts'],
    experimental: {
      swcPlugins: [
        // [
        //   'swc-plugin-another-transform-imports',
        //   {
        //     "antd": {
        //       "transform": "antd/es/${member}",
        //       "skipDefaultConversion": false,
        //       "preventFullImport": true,
        //       "style": "antd/es/${member}/style",
        //       "memberTransformers": ["dashed_case"]
        //     }
        //   }
        // ]
        [
          '@swc/plugin-styled-components',
          {
            namespace: 'headless',
            ssr: true,
            displayName: true,
            fileName: false,
            minify: true,
            pure: true,
            transpileTemplateLiterals: true
          }
        ]
      ]
    },
    serverRuntimeConfig: {
      // Will only be available on the server side
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
    },
    webpack: (config, {}) => {
      // Important: return the modified config
      return config
    }
  }

  return isProd ? withBundleAnalyzer(nextConfig) : nextConfig
}
