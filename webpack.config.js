const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
  entry: './source/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  },
  watch: true,
  module: {
    rules: [
    {
      test: /\.js$/,
      use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-3']
        }
      }          
      ]
    },           
    {
      test: /\.(scss|css)$/,        
      use: ExtractTextPlugin.extract({
        use: [
        {
          loader: 'css-loader',
          options: {                    
            url: false,
            minimize: true,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
            autoprefixer({
              browsers: ['ie >= 8', 'last 4 version']
            }),
            cssnano()
            ]
          }
        },
        {
          loader: 'sass-loader'
        }
        ]
      })
    },      
    ]
  },
  plugins: [
  new ExtractTextPlugin('style.css'),
  new UglifyJsPlugin()
  ]  
};

module.exports = (env, options) => {
  let mode = options.mode === 'development';

  if (!mode) {
    config.devtool = false;
    config.watch = false;
  }

  return config;
};

