const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js'],
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist/public'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    port: 4242,
  },
  devtool: mode === 'development' ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/img'),
          to: path.resolve(__dirname, 'dist/public/src/assets/img'),
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicons/favicon.png',
      mode: 'webapp',
      prefix: 'src/assets/favicons/',
      favicons: {
        icons: {
          coast: false,
          yandex: false,
          appleIcon: false,
          appleStartup: false,
          windows: false
        }
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/fonts/[name][ext]',
        },
      },
      {
        test: /(backgound-village).*\.(jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/img/backgound-village/[name][ext]',
        },
      },
      {
        test: /(choose-tour-images).*\.(jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/img/choose-tour-images/[name][ext]',
        },
      },
      {
        test: /(svg-icons).*\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/img/svg-icons/[name][ext]',
        },
      },
      {
        test: /(histories).*\.(jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/img/histories/[name][ext]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        test: /\.(jpe?g|png|)$/i,
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
};
