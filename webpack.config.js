var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/bundle');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  }
};

module.exports = config;