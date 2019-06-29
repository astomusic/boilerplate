const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const port = process.env.PORT || 8080;

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js'
  },
  module:{
    rules:[
      {
        test: /\.(js)$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true
  }
};