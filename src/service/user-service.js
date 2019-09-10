import { saveRouterInfoFromStorage, setToken } from '../utils/utils'
import { StatusCode } from '../utils/constant'
import { login, logout } from '../api/user-api'

function sLogin (data) {
  return login(data).then(res => {
    if (res.code === StatusCode.Success) {
      saveRouterInfoFromStorage(res.dataList)
      setToken(escape(res.msg))
      return transfer(res)
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject()
    }
  }).catch(e => {
    console.log(e)
  })
}

function sLogout () {
  return logout()
}

export {
  sLogin,
  sLogout
}
