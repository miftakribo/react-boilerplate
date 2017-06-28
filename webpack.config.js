const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const path = require('path');
const entries = debug ? { 'app': ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/dev-server', 'react-hot-loader/patch', './app/app.js'] } : { 'app': ['./app/app.js'] };

module.exports = {
  context: __dirname,
  devtool: debug ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'app/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
      },{
        test: /\.(scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }]
  },
  devServer: {
    historyApiFallback: debug ? true : false
  },
  plugins: debug ? [
    // development emv plugins
    new webpack.HotModuleReplacementPlugin(),
    new DuplicatePackageCheckerPlugin()

  ] : [
    // production env plugin
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourcemap: false,
      compress:{
        'screw_ie8': true,
        'warnings': false,
        'unused': true,
        'dead_code': true,
        'pure_getters': true,
        'unsafe': true,
        'unsafe_comps': true,
      },
      output: {
        comments: false,
      },
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'app/components')
    },
    extensions: ['.js','jsx'],
    modules: ['node_modules', 'app', 'app/assets']
  }
};
