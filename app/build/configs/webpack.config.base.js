const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(path.join(process.env.PWD, 'src'));
const templateSourcePath = path.join(sourcePath, 'templates');

const distPath = path.resolve(path.join(process.env.PWD, 'dist'));

module.exports = {
  output: {
    path: distPath,
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(templateSourcePath, 'index.ejs'),
      inject: true,
      production: false
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [sourcePath, 'node_modules']
  }
};
