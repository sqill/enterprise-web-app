// next.config.js
const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  images: {
    domains: ['sqill.s3.eu-west-3.amazonaws.com', 'heysqill.com', 'sqill-dev.s3.eu-west-3.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: '/app/users'
      }
    ]
  },
  sentry: {
    hideSourceMaps: true,
  }
}


const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
