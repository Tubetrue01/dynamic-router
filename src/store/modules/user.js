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
      return sLogin(data).then(re => {
        // 处理数据，将user信息保存到vuex
        if (re.code === StatusCode.Success) {
          commit('save', re.code)
          return transfer(re)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }
      }).catch(err => {
        throw err
      })
    }
  },
  getter: {}
}

export default user
