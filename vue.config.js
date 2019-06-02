const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/mobile/'
  : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'basic': path.resolve(__dirname, './src/components/basic'),
        'business': path.resolve(__dirname, './src/components/business')
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/v1': {
        target: 'http://183.134.200.14:8888',
        changeOrigin: true,
        onProxyReq: function(proxyReq) {
          proxyReq.removeHeader('origin')
        },
        secure: false, // HTTPS
        // pathRewrite: {'^/v1' : '/'}
      }
    }
  }
}