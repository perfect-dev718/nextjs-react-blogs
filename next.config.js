const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    API_KEY: process.env.API_KEY,
  },
  webpack: (config) => {
    config.output = config.output || {};
    config.output.devtoolModuleFilenameTemplate = function (info) {
      return 'file:///' + encodeURI(info.absoluteResourcePath);
    };

    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      },
    );

    return config;
  },
});
