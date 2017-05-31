const path = require('path');
const webpack = require('webpack');
let config = {
   entry: './client/index.jsx',
	
   output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/client',
      filename: 'bundle.js',
   },
	
   devServer: {
      contentBase: './public',
      inline: true,
      hot: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
}

module.exports = config;