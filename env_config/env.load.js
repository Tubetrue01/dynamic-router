const RUN_SERVER = process.env.run_server || 'development' // 运行环境
const DefaultENVConfig = require('./development') // 默认配置
// 将默认配置和当前运行环境的配置浅拷贝到{}返回
const serverEnvConfig = Object.assign({}, DefaultENVConfig, require('./' + RUN_SERVER + '.json'))

module.exports = serverEnvConfig
