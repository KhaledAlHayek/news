const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./assets/layout/src/app.ts",
  output: {
    path: path.resolve(__dirname, "assets/layout/js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // exclude: /node_modules/,
        include: __dirname,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"] 
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ]
}