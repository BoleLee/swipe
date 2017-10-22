const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);


module.exports = {
  entry: path.join(ROOT_PATH, 'example/index.js'),

  output: {
    path: path.join(ROOT_PATH, 'dist'),
    filename: 'example.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      { 
        test: /\.js$/, 
        exclude: ['node_modules'],
        loader: 'babel-loader'
      },

      {
        test: /\.(scss|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 'sass-loader?importLoaders=1'
          ]
        })
      },

    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

