const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const srcDir = resolve(__dirname, 'src')

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js'
    },
    devServer: {
          historyApiFallback: true
    },
    module: {
      rules: [{
          enforce: 'pre',
          test: /\.js$/,
          loader: 'standard-loader',
          exclude: /node_modules/
      }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }, {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
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
      new HtmlWebpackPlugin({
        template: `${srcDir}/index.html`,
        filename: './index.html'
      }),
      new DashboardPlugin()
    ]
}
