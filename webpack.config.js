const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const path = require('path')

const vendor = [
  'react',
  'react-redux',
  'react-dom',
  'react-router-dom',
  'react-router-redux',
  'redux',
  'redux-thunk',
  'redux-promise-middleware'
]

const entries = debug ? { 
  'app': ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/dev-server', 'react-hot-loader/patch', './app/app.js'],
  'vendor': vendor
} : { 
  'app': ['./app/app.js'],
  'vendor': vendor
};

module.exports = {
  context: __dirname,
  devtool: debug ? 'cheap-module-eval-source-map' : 'eval',
  entry: entries,
  output: {
    path: path.resolve(__dirname, debug ? 'app/' : 'dist/'),
    filename: '[name].bundle.js'
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
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new CopyWebpackPlugin([
      { from: 'app/assets', to: 'assets' }
    ]),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: true,
        sourcemap: true,
        compress:{
          'ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true,
          'pure_getters': true,
          'unsafe': true,
          'unsafe_comps': true,
        },
        output: {
          comments: false,
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js','jsx'],
    modules: ['node_modules', 'app', 'app/assets']
  }
};
