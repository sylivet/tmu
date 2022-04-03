const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'eval-cheap-source-map',
  output: {
    
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js?[contenthash:8]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?[contenthash:8]'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/images', to: 'images' }
      ],
    })
  ]
})
