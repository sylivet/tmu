const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  devtool: 'eval-cheap-source-map',
  devServer: {
    compress: false,
    static: {
      //靜態檔案設定
      directory: path.resolve(__dirname, "src/public"), // 靜態檔案路徑
      watch: true,
    },
    watchFiles: ["src"], // directory 裡指定的夾有更變時， server reload
    host: "0.0.0.0",
    port: 3003,
    liveReload: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true
    //   }
    // }
  },
});
