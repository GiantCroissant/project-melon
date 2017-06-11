const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'source-map',

  entry: {
    'app': [
      'babel-polyfill',
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
              "transform-decorators-legacy",
              "transform-class-properties",
              "transform-es2015-destructuring"
            ]
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
});
