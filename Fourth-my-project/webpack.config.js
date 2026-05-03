const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),    // 于当前目录下创建 dist 文件夹
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],   // 解析 TypeScript、JavaScript 和 Vue 文件
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/i,    // 匹配以 .module.css 结尾的 CSS 文件
        use: [
          'style-loader',   // 将 CSS 注入到 DOM 中
          {
            loader: 'css-loader',   // 处理 CSS 文件
            options: {
              modules: true,    // 启用 CSS Modules
            },
          },
        ],
      },
      {
        test: /\.css$/i,    // 匹配 CSS 文件
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/i,   // 排除 .module.css 文件
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,   // 匹配图片文件
        type: 'asset/resource',   // 将图片文件作为资源处理
      },
      {
        test: /\.(ts|js)$/i,    // 匹配 TypeScript 和 JavaScript 文件
        exclude: /node_modules/,   // 排除 node_modules 目录
        use: {
          loader: 'ts-loader',   // 使用 ts-loader 处理 TypeScript 文件
          options: {
            appendTsSuffixTo: [/\.vue$/],   // 将 .vue 文件视为 TypeScript 文件进行处理
          },
        },
      },
      {
        test: /\.vue$/,   // 匹配 Vue 文件
        loader: 'vue-loader',   // 使用 Vue Loader 处理 Vue 文件
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),   // 添加 Vue Loader 插件
    new HtmlWebpackPlugin({
      template: './src/index.html',   // 基于模板生成 HTML 文件
    }),
    new CleanWebpackPlugin(),   // 每次构建前清理 dist 文件夹，以免文件残留
  ],
  devServer: {    // 配置开发服务器
    hot: true,    // 启用热更新
    open: true,   // 构建完成后自动打开浏览器
    port: 9000,   // 指定开发服务器的端口号
  },
}
