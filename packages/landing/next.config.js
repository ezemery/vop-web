const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
module.exports = withPlugins(
  [
    [withTM],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS,
  ],
  {
    distDir: '../../dist/functions/next',
    webpack(config, { dev }) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
          },
        },
      });

      return config;
    },
    
  }
);
