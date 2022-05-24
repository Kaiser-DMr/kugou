module.exports = {
  // 关闭eslint语法检查
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://m.kugou.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}