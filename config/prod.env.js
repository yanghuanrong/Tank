const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./index.js')
const packageInfo = require('../package.json')

module.exports = {
  context: config.rootPath,
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: {
    path: config.staticPath,
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      }, {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin()
  ]
}
