const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 整合入口文件
  entry: {
    app: "./src/index.js",
  },
  // 追踪到错误和警告在源代码中的原始位置
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [
    // 清理dist文件夹
    new CleanWebpackPlugin(),
    // 生成新的html
    new HtmlWebpackPlugin({ title: "threejsTest" }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".json", ".js"],
  },
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 加载SCSS
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      // 以文件的形式加载json,若以json形式加载，则无需配置
      {
        test: /\.typeface.json$/,
        type: "javascript/auto",
        use: ["file-loader"],
      },
    ],
  },
};
