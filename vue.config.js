const serverEnvConfig = require('./env_config/env.load')

module.exports = {
  publicPath: './', // 默认值
  devServer: {
    open: true, // 在服务器启动时打开浏览器
    port: 8082 // 端口号
  },
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      for (let i in serverEnvConfig) {
        args[0]['process.env'][i] = `"${serverEnvConfig[i]}"`
      }
      return args
    })
  },
  productionSourceMap: true, // 开启gzip，此操作需要nginx配置
  configureWebpack: {
    // 把webpack的配置写在这里 会自动合并
    // 以下库使用cdn，不会被打包
    externals: {
      'axios': 'axios',
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      // 'element-ui': 'ELEMENT'
    }
  }
}
