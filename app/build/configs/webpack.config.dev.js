const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const outputPath = path.resolve(path.join(process.env.PWD, 'build', 'dlls'));

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
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
                  "modules": false//,
                  // "loose": true
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
    new BrowserSyncPlugin(
      {
        open: false,
        host: '0.0.0.0',
        port: 3000,
        proxy: {
          target: 'http://0.0.0.0:3000',
          ws: true
        }
      },
      {
        reload: false
      }
    ),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DllReferencePlugin({
      context: outputPath,
      manifest: require(path.join(outputPath, 'coreRelated.json'))
    }),
    new webpack.DllReferencePlugin({
      context: outputPath,
      manifest: require(path.join(outputPath, 'viewRelated.json'))
    }),
  ],

  devServer: {
    // contentBase: './dist',
    //contentBase: './public',
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/',
    // publicPath: 'http://localhost:3000/',
    hot: true,
    historyApiFallback: true
  }

});
