const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const templateSourcePath = path.join(sourcePath, 'templates');

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  entry: {
    'app': [
      './src/index'
    ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|templates)/,
        // loader: 'babel-loader'
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "env",
                {
                  "modules": false,
                  "loose": true
                }
              ],
              [
                "react"
              ]
            ]
          }
        }
      }
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.join(templateSourcePath, 'index.ejs'),
      inject: true,
      production: false
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
