const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	//构建模式
	mode: 'development',
	// mode: 'production',
	//开发工具，用于指示报错信息位置
	devtool: 'inline-source-map', 
	//入口文件
	entry: {
		// Topoboard: './src/core/index.js', // 核心接口模块
		Topoboard: './src/graphs/index.js', // 图形扩展模块, 基于核心接口扩展, 包含核心接口
		index: './public/demo/index.js'
  },
	//输出文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}, 
	//应用loader
	module: {
		rules: [
			// js
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			// css
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			// html
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 		//配置抽离的文件
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].html'
			// 			}
			// 		},
			// 		//单独抽离HTML文件
            //         {loader: 'extract-loader'},
			// 		//html加载
			// 		{loader: 'html-loader'}
			// 	]
			// },
			// img
			// {
			// 	test: /\.(png|jpg)$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				limit: 1,
			// 				name: 'img/[name].[ext]'
			// 			}
			// 		}
			// 	]
			// }
		]
	},
	//应用插件
  plugins: [
    new CopyWebpackPlugin([
			{
				from: 'src/img/*',
				to: 'img/[name].[ext]'
			},
			{
				from: 'src/*.json',
				to: '[name].[ext]'
			}
		]),
    new HtmlWebpackPlugin({
			filename: 'demo.html',
			template: './public/demo/demo.html',
			minify: {
				//压缩空白
				collapseWhitespace: false
			}
		})
	],
  devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
}