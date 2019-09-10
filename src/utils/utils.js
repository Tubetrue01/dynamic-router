// 获取按钮权限
import { Constant } from './constant'
import Cookies from 'js-cookie'

const YJ_TOKEN = 'yj_token'

// 存储用户信息
function setToken (token) {
  Cookies.set(YJ_TOKEN, token)
  if (!token || token === '') {
    window.localStorage.clear()
  }
}

// 获取用户信息
function getToken () {
  return Cookies.get(YJ_TOKEN)
}

// 删除token
function removeToken () {
  return Cookies.remove(YJ_TOKEN)
}

// Get all the buttons in this page by specified privileges
function getButtonsOfPage () {
  const routeInfo = getRouterInfoFromStorage()
  if (routeInfo) {
    const currentPermission = routeInfo.filter(item => {
      return item.meta.title === this.$route.meta.pname
    })
    if (currentPermission[0].length !== 0) {
      const second = currentPermission[0].children.filter(item => {
        return item.meta.title === this.$route.name
      })
      if (second[0].length !== 0) {
        this.allButton = second[0].children
      }
    }
  }
}

// Get route info from local storage
function getRouterInfoFromStorage () {
  return JSON.parse(window.localStorage.getItem(Constant.RouteInfo))
}

// Save route info into local storage
function saveRouterInfoFromStorage (data) {
  window.localStorage.setItem(Constant.RouteInfo, JSON.stringify(data))
}

// FIXME
// Clear local storage
function clearStorage () {
  window.localStorage.clear()
}

/**
 *
 *@param time Time your need to sleep and the unit is milliseconds
 *
 */
function sleep (time) {
  const end = new Date().getTime() + time
  while (true) {
    if (new Date().getTime() >= end) {
      break
    }
  }
}

/**
 *
 *@param apiFn A api need to package by promise and used to function of async
 *@param data A optional param the api maybe need it
 *
 */
function convert (apiFn, ...data) {
  return new Promise((resolve, reject) => {
    apiFn(data).then(result => {
      resolve(result.dataList)
    }).catch(e => {
      throw e
    })
  })
}

export {
  getButtonsOfPage,
  getRouterInfoFromStorage,
  saveRouterInfoFromStorage,
  setToken,
  getToken,
  removeToken,
  clearStorage,
  sleep,
  convert
}
