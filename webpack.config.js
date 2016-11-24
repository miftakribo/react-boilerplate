const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './app/app.js',
  output: {
    // path: debug ?  __dirname + '/app' : __dirname + '/dist',
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
        }
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
