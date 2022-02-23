const path = require("path");
// 절대경로를 위한 모듈을 import
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// 핫리로딩을 위한 플러그인
const webpack = require("webpack");
// require("@babel/polyfill");

module.exports = {
  mode: "development",
  // 모드
  entry: "./src/index.js",
  //진입점이 될 파일
  output: {
    path: path.join(__dirname, "public"),
    //경로
    filename: "bundle.js",
    //결과물의 이름
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
    alias: {
      "@images": path.resolve(__dirname, "public/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@sagas": path.resolve(__dirname, "src/sagas"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      // https://yamoo9.gitbook.io/webpack/webpack/webpack-plugins/manage-env-variables
    }),
  ],
  devtool: "eval-cheap-module-source-map",
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
