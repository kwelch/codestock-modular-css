const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  target: 'web',
  devtool: 'cheap-eval-source-map',
  entry: {
    main: [
      'babel-polyfill',

      // activate HMR for React
      'react-hot-loader/patch',

      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack-dev-server/client?http://localhost:3000',

      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      './src/index.js',
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        exludes: ['node_modules'],
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates

    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.NamedModulesPlugin(),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash].js',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    // respond to 404s with index.html
    historyApiFallback: true,
    // enable HMR on the server
    hot: true,
    open: true,
    openPage: '',
  },
});
