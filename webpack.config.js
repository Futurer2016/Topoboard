const path = require('path');

module.exports = {
	//构建模式
	mode: 'development',
	// mode: 'production',
	//开发工具，用于指示报错信息位置
	devtool: 'inline-source-map', 
	//入口文件
	entry: {
		Board: './src/drawer/Topoboard.js',
		optcut: './src/index.js'
    },
	//输出文件
	output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: '[name].js'
	}, 
	//模块依赖 babel
	module: {
		rules: [
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}, 
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
}