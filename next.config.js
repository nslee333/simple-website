const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // ^ Added workaround for mini-css-extract-plugin url prefix error. 
  // ^ Please refer to this issue: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/945
  webpack: ( 
    config
  ) => {
    plugins: [
      (config.module.generator.asset.publicPath = "/_next/"),
      new MiniCssExtractPlugin({
        experimentalUseImportModule: false,
      }),
    ];
    return config;
  },
};
