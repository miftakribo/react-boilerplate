const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? 'cheap-module-eval-source-map' : null,
  entry: [
    debug ? 'webpack-dev-server/client?http://0.0.0.0:3000' : null, // WebpackDevServer host and port
    debug ? 'webpack/hot/only-dev-server' : null, // "only" prevents reload on syntax errors
    './app/app.js'
  ],
  output: {
    // path: debug ?  __dirname + '/app' : __dirname + '/dist',
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/lib/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader?importLoaders=1",
        // loaders: ["style-loader","css-loader"],
        // include: path.join(__dirname, "app")
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
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
        warnings: true
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
