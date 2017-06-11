const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');

// const baseConfig = require('./webpack.config.base');

const outputPath = path.resolve(path.join(process.env.PWD, 'build', 'dlls'));

module.exports = {
  devtool: 'eval-source-map',

  output: {
    path: outputPath,
    filename: '[name].dll.js',
    library: '[name]'
  },

  entry: {
    'viewRelated': [
      'mobx-react',

      'react',
      'react-dom',

      'react-router'
    ],

    'coreRelated': [
      'mobx',

      'remark'
    ]
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(outputPath, '[name].json')
    })
  ]

};
