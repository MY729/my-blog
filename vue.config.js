module.exports = {
  runtimeCompiler: true,
  // 代理配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // css全局引入样式
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/index.scss";`
      }
    }
  }
}