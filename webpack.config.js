const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const entries = debug ? ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './app/app.js'] : ['./app/app.js'];

module.exports = {
  context: __dirname,
  devtool: debug ? 'cheap-module-eval-source-map' : null,
  entry: entries,
  output: {
    path: path.join(__dirname, 'app/lib/'),
    filename: 'bundle.js',
    publicPath: '/lib/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader!eslint-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader?importLoaders=1"
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }, {
        test: /\.jpg$/,
        loader: "file-loader"
      }]
  },
  devServer: {
    historyApiFallback: debug ? true : false
  },
  plugins: debug ? [
    // development emv plugins
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
    // production env plugin
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
      compress:{
        'screw_ie8': true,
        'warnings': false,
        'unused': true,
        'dead_code': true,
      }
    })
  ],
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      components: 'app/components'
    },
    extensions: ['','.js','jsx']
  }
};
