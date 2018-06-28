const webpack = require('webpack');


var config = {
	entry: './source/index.js',

	output: {
		path: __dirname + '/build.',
		filename: 'tinablunt.js',
	},
	
	devServer: {
		inline: true,
		port: 8080,
		proxy: {
			// !!!:Debug
			'/CODECODE':{
				pathRewrite: {'^/CODECODE$' : '/index.html'},
				target:'http://localhost:8080'
			},

			'/view/send-success':{
				pathRewrite: {'^/view/send-success' : '/index.html'},
				target:'http://localhost:8080'
			},

			'/view/privacy-policy':{
				pathRewrite: {'^/view/privacy-policy' : '/index.html'},
				target:'http://localhost:8080'
			},
			
			'/support/faq':{
				pathRewrite: {'^/support/faq' : '/index.html'},
				target:'http://localhost:8080'
			},

			'/support/contact':{
				pathRewrite: {'^/support/contact' : '/index.html'},
				target:'http://localhost:8080'
			},

			'/shop/shop':{
				pathRewrite: {'^/shop/shop' : '/index.html'},
				target:'http://localhost:8080'
			},

			'/about/about':{
				pathRewrite: {'^/about/about' : '/index.html'},
				target:'http://localhost:8080'
			},

			'/about/get-started':{
				pathRewrite: {'^/about/get-started' : '/index.html'},
				target:'http://localhost:8080'
			},
			
			'/r/*':{
				pathRewrite: {'^/r/.*' : '/index.html'},
				target:'http://localhost:8080'
			},
			
			'/r/view/report-to-me':{
				pathRewrite: {'^/r/view/report-to-me' : '/index.html'},
				target:'http://localhost:8080'
			},
			
		},
	},
	
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react'],
				}
			},
			
			{ 
				test: /\.(css|less)$/,
				loader: 'style-loader!css-loader?modules!less-loader'
			},
			
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader',
			},
			
			{ 	test: /\.gif$/,
				loader:'url-loader',  
			},
			
			{ 
				test: /\.(ttf|eot|svg)$/,
				loader:'file-loader', 
			},
		]
	},
	
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			},
		}),
	],
	
	devtool:'cheap-module-source-map',
};


module.exports = config;
