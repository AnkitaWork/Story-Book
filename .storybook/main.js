const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-sourcecode-preview/register"
  ],
  webpackFinal: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: 'src', to: 'dist' }
        ],
      }),
    );
    return config;
  }
}
