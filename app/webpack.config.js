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
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?quiet=true',
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
            ],
            plugins: [
              "react-hot-loader/babel",
              "transform-decorators-legacy",
              "transform-class-properties",
              "transform-es2015-destructuring",

              [
                "module-resolver", {
                  "root": [
                    "./src"
                  ]
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },

  plugins: [

    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

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
