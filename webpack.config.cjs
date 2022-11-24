const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js'],
  },
  entry: './src/js/index.js',
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
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/public/src/img'),
        },
      ],
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
          filename: 'src/fonts/[name][ext]',
        },
      },
      {
        test: /(backgound-village).*\.(jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/img/backgound-village/[name][ext]',
        },
      },
      //   {
      //     test: /\.(png|jpg|gif|svg)$/,
      //     type: 'asset/resource',
      //     generator: {
      //       filename: 'src/img/[name][ext]',
      //     },
      //  }
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        test: /\.(jpe?g|png|)$/i,
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                quality: 100,
              },
              webp: {
                lossless: 1,
              },
              avif: {
                cqLevel: 0,
              },
            },
          },
        },
        // generator: [
        //   {
        //     type: "asset",
        //     implementation: ImageMinimizerPlugin.squooshGenerate,
        //     options: {
        //       encodeOptions: {
        //         webp: {
        //           quality: 90,
        //         },
        //       },
        //     },
        //   },
        // ],
      }),
    ],
  },
};
