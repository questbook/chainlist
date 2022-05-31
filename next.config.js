const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    reactStrictMode: true,
    images: {
      domains: ['defillama.com'],
    },
    plugins: [
      new webpack.IgnorePlugin({
          resourceRegExp: /^electron$/
      }),
    ]
  }
  