const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const VERSION = require("./package.json").version;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "选股器",
      version: VERSION,
    },
  },
  lintOnSave: false, //是否支持报错
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== "production", //去除map
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "src"));
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // 全局变量资源路径
          resources: "./src/style/common.scss",
          // 也可以选择全局变量路径数组, 如果你有多个文件需要成为全局,就可以采用这种方法
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          // 或者你可以将多个scss文件@import到一个main.scss用第一种方法，都是可以的
        })
        .end();
    });
  },
  configureWebpack: (config) => {
    //webpack配置
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              },
            },
            sourceMap: true,
            parallel: true,
          }),
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, //对超过10K的数据进行压缩
            deleteOriginalAssets: false, //是否删除源文件
          }),
        ],
      };
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  css: {},
  devServer: {
    open: true,
    port: 443,
    public: "0.0.0.0:443",
    disableHostCheck: true,
    https: true, //是否使用https协议
    proxy: {
      "/topicWeb": {
        target: "https://dev.xcxjl.net",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/topicWeb": "/topicWeb",
        },
      },
    },
  },
  publicPath: process.env.NODE_ENV == "development" ? "/" : "/topic-web",
  outputDir: "dist", //打包输出目录
  assetsDir: "./static", //静态文件放置目录
};
