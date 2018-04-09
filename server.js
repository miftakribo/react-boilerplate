var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var compiler = webpack(config);
var port = 3001

new webpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'app/',
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log(`listening at http://localhost:${port}/`);
})
