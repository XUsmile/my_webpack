const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ClearWebpackPlugin = require('clean-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'head'
    }),
    new UglifyWebpackPlugin(),
    new ClearWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  devServer: {
    clientLogLevel: 'warning',
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    open: false,
    host: 'localhost',
    port: '7777',
    inline: true,
    compress: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 1000, 
      aggregateTimeout: 500,
      ignored: /node_modules/ 
    }
  }
}