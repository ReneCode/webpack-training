
var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
	test: [ /\.js$/, /\.es6$/ ],
	exclude: /node_modules/,
	// remove console.log calls
	// additional calls separated by komma
	loader: WebpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);



module.exports = devConfig;