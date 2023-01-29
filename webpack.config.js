const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const TerserPlugin = require("terser-webpack-plugin");
const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html',
})

module.exports = {
  entry: path.join(__dirname, 'examples/src/index.js'),
  output: {
    filename: 'bundle.js',
    sourceMapFilename: 'sourcemap/bundle.js.map',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3001,
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
