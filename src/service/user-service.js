import { saveRouterInfoFromStorage, setToken } from '../utils/utils'
import { StatusCode } from '../utils/constant'
import { login, logout } from '../api/user-api'

function sLogin (data) {
  return new Promise((resolve, reject) => {
    login(data).then(res => {
      if (res.code === StatusCode.Success) {
        saveRouterInfoFromStorage(res.dataList)
        setToken(escape(res.msg))
        resolve(res)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject()
      }
    })
  })
}

function sLogout () {
  return logout()
}

export {
  sLogin,
  sLogout
}
