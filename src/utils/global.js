// 将console.log挂载到全局，方便使用
const log = console.log.bind(console)
export default {
  install (Vue, options) {
    Vue.prototype.log = log
  }
}
