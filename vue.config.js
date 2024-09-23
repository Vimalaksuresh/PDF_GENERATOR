module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
