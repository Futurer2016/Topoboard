const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	//构建模式
	mode: process.env.NODE_ENV,
	//开发工具，用于指示报错信息位置
	devtool: process.env.NODE_ENV == 'development'? 'inline-source-map': void 0, 
	//入口文件
	entry: {
		// Topoboard: './src/core/index.js', // 核心接口模块
		Topoboard: './src/graphs/index.js', // 图形扩展模块, 基于核心接口扩展, 包含核心接口
		index: './public/demo/index.js'
  },
	//输出文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
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
			// less
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					{
						loader: 'postcss-loader', 
						options: {
							ident: 'postcss',
							plugins: [
								// postcss 功能完全包含 autoprefixer
								require('postcss-cssnext')(),
								// 前缀自动填充
								// require('autoprefixer')(),
								// css 压缩
								require('cssnano')()
							]
						}
					}, 
					'less-loader'
				]
			}
		]
	},
	//应用插件
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CopyWebpackPlugin([
			{
				from: 'public/demo/img',
				to: 'img'
			},
			{
				from: 'public/demo/data/*.json',
				to: 'data/[name].[ext]'
			},
			{
				from: 'lib/gif/*',
				to: '[name].[ext]'
			}
		]),
    new HtmlWebpackPlugin({
			filename: 'demo.html',
			template: './public/demo/demo.html',
			minify: {
        // 清理注释
        removeComments: true,
				//压缩空白
				collapseWhitespace: false
			}
		}),
    // new CleanWebpackPlugin()
	],
  devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
}