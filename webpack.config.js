const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  optimization: {
    runtimeChunk: 'single'
  },
  
  entry: {
  index: './src/index.js',
  home: './src/home.js',
  navbar: './src/navbar.js',
  },
  
  devtool: 'inline-source-map',
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
     
    ],
  },
};