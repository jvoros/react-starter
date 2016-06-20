/*
Tutorials:
- https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
- http://tylermcginnis.com/react-js-tutorial-1-5-utilizing-webpack-and-babel-to-build-a-react-js-app/
- https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
*/
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  // devtool: 'eval-source-map',
  entry: {
    javascript: './index.js',
    html: './index.html',
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        // file-loader to move index.html to www
        test: /\.html$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'file?name=[name].[ext]',

      },
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style!css!stylus',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.styl'],
  },
  plugins: [

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true,
    //     dead_code: true,
    //     unused: true,
    //     drop_debugger: true,
    //     drop_console: true,
    //   },
    // }),
  ],
};
