const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: false,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
