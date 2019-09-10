import { sLogin } from '../../service/user-service'

const user = {
  state: {
    username: ''
  },
  mutations: {
    save (state, data) {
      state.username = data
    }
  },
  actions: {
    xLogin ({ commit }, data) {
      return new Promise((resolve, reject) => {
        // 处理数据，将user信息保存到vuex
        sLogin(data).then(re => {
          if (re.code === StatusCode.Success) {
            commit('save', re.code)
            resolve(re)
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject()
          }
        })
      }).catch(err => {
        throw err
      })
    }
  },
  getter: {}
}

export default user
