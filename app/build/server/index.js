const express = require('express');
const path = require('path');

const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(
    compiler, {
      noInfo: true,
      stats: {
        colors: true
      },
      publicPath: config.output.publicPath
    }
  )
);

app.use(
  require('webpack-hot-middleware')(
    compiler
  )
);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('Server running on port: 3000');
});
