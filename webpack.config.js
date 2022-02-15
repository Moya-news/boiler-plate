const path = require("path");
// 절대경로를 위한 모듈을 import
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// 핫리로딩을 위한 플러그인
require("dotenv").config();

module.exports = {
  mode: process.env.mode === "development" ? "development" : "production",
  // 모드
  entry: "./src/index.js",
  //진입점이 될 파일
  output: {
    path: path.join(__dirname, "public"),
    //경로
    filename: "bundle.js",
    //결과물의 이름
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  devtool:
    process.env.mode === "development"
      ? "eval-cheap-module-source-map"
      : "source-map",
  // 소스를 매핑하는 방법
  // 개발모드냐 프로덕션 모드냐에 따라 다르게함
  // https://webpack.kr/configuration/devtool/
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      //   서버에 정적파일의 위치를 알려줌
    },
    port: 3000,
    hot: true,
  },
  //   https://webpack.js.org/configuration/dev-server/
};
