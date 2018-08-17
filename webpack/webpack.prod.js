const { resolve } = require('path')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OfflinePlugin = require('offline-plugin')

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              sourceMap: true,
              camelCase: true,
              miminize: true
            }
          }]
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[chunkhash:6].css",
      chunkFilename: "[id].[chunkhash:6].css"
    }),
    new CleanWebPackPlugin('dist'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new OfflinePlugin(),
  ],
  performance: {
    hints: 'error',
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 2,
          enforce: true
        }
      }
    }
  }
}
