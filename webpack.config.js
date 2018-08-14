const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const srcDir = resolve(__dirname, 'src')

module.exports = {
    mode: 'development',
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js'
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
            use: ExtractTextPlugin.extract({
             use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
            })
        }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${srcDir}/index.html`
      }),
      new ExtractTextPlugin({
        filename: 'styles.css'
      }),
      new DashboardPlugin()
    ]
}