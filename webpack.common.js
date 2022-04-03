const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const WebpackBar = require("webpackbar");

// const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development'  // me add

module.exports = {
  //起始位置
  context: path.resolve(__dirname, "src"),

  //快捷設定
  resolve: {
    alias: {
      //快捷
      "~": path.resolve(__dirname, ""),
      "@": path.resolve(__dirname, "src"),
    },
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all",
          enforce: true,
          priority: 10,
        },
      },
    },
  },

  //入口
  //entry: './js/main.js',
  entry: {
    index: [
      "regenerator-runtime/runtime",
      "core-js/stable",
      "./js/index.js",
      "./js/output_style.js",
    ],
    major_fields: [
      "regenerator-runtime/runtime",
      "core-js/stable",
      "./js/major_fields.js",
      "./js/output_style.js",
    ],
    newest: [
      "regenerator-runtime/runtime",
      "core-js/stable",
      "./js/newest.js",
      "./js/output_style.js",
    ],
    
  },
  stats: process.env.NODE_ENV === "development" ? "errors-only" : "normal",
  //模式
  //mode: process.env.NODE_ENV,  //在 package 呼叫自定義指令時 指定
  mode: process.env.NODE_ENV, // me update, （註：package.json 可能忘記定義，所以找不到）
  //額外插件
  plugins: [
    new WebpackBar(),
    new htmlWebpackPlugin({
      template: `./views/pages/index.hbs`,
      filename: `index.html`,
      inject: "body",
      chunks: ["vendor", "index"], //chunk -> 哪個 html檔要吃哪支 js
      minify: false,
    }),

    new htmlWebpackPlugin({
      template: `./views/pages/major_fields.hbs`,
      filename: `major_fields.html`,
      inject: "body",
      chunks: ["vendor", "major_fields"], //chunk -> 哪個 html檔要吃哪支 js
      minify: false,
    }),

    new htmlWebpackPlugin({
      template: `./views/pages/newest.hbs`,
      filename: `newest.html`,
      inject: "body",
      chunks: ["vendor", "newest"],
      minify: false,
    }),
  ],

  //載入器 (loader)
  module: {
    rules: [
      // for babel loader
      {
        test: /.m?js$/i,
        loader: "babel-loader",
        exclude: /node_modules\/(?!(lit-html|@splidejs))/,
      },

      // for css loader
      {
        test: /.s[ac]ss$/i,
        use:
          process.env.NODE_ENV === "development"
            ? [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: true,
                  },
                },
                "postcss-loader",
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: true,
                  },
                },
              ]
            : [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
              ],
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      // for hbs loader
      {
        test: /.(hbs|handlebars)$/i,
        loader: "handlebars-loader",
        options: {
          // inlineRequires: '\/images\/',  //放圖片資源的資料夾叫什麼名字   //沒 inlineRequire話，會用到相對路徑，build出來依經驗會問題，除非所有東西都用直接從根目錄出發

          //partialDirs: [path.resolve(__dirname, 'src/view/pages')],
          partialDirs: [path.resolve(__dirname, "src/views")], //查看的資料夾 => html  //類似 context (起始位置)的設定

          helperDirs: path.resolve(__dirname, "src/handlebars/helpers"), //help 的資料夾 => js
          // hbs loader專用， 由於是按需引入，因此許多有需要的再引入

          precompileOptions: {
            knownHelpersOnly: false,
          },
          knownHelpers: [
            "times",
            //'repeat',
            //'math',
            "picture",
            "context-picture",
            "lorem",
            "equal",
            //
            "randomPicture",
            "randomNum",
            "add",
            "eq",
            "forEach",
            "ternary",
          ],
        },
      },

      // for img loader
      {
        test: /.(png|jpe?g|webp|svg|woff2?|ttf)$/i,
        type: "asset", //與 'asset/resource' 的差別   // https://webpack.js.org/guides/asset-modules/
        parser: {
          /**
           * 自動判斷超過 4kb 就用base64注入
           */
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },

  // 伺服器設定 (分割到 webpack.dev.js)
  // devServer: { //me add
  //   //static: './dist',

  //   static: { //靜態檔案設定
  //     directory: path.resolve(__dirname, 'src/public'),    //監聽設定   //靜態檔案路徑    //同時也有指定起始檔案位置   //hot reload
  //     watch: true  //directory 裡指定的夾有更變時， server reload
  //   },
  //   watchFiles:['src'],
  //   port: 3003,
  // }
};
