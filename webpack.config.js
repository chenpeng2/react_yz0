var debug = process.env.NODE_ENV == "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
   //devtool: debug ? "inline-sourcemap" : null,
  entry: {
    bundle: "./src/js/root.js",
    vendor: ['moment', 'react', 'react-dom', 'react-router','amazeui-react',"babel-polyfill","whatwg-fetch"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0'],
          plugins: ['react-html-attrs',["import", {
              "libraryName": "antd",
              "libraryDirectory": "lib",
              "style": "css"
            }]] //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "./src/vendor.bundle.js",

    }),
    new webpack.optimize.UglifyJsPlugin({
        // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
              // 在UglifyJs删除没有用到的代码时不输出警告
              warnings: false,
              // 删除所有的 `console` 语句
              // 还可以兼容ie浏览器
              drop_console: true,
              // 内嵌定义了但是只用到一次的变量
              collapse_vars: true,
              // 提取出出现多次但是没有定义成变量去引用的静态值
              reduce_vars: true,
            },
            mangle: false, sourcemap: false })
  ],
};
