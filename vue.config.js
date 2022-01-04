module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: true
      },
    }
  }
}