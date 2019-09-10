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

/*
 * Get all the buttons in this page by specified privileges
 */
function getButtonsOfPage () {
  // Get route info from the storage
  const routeInfo = getRouterInfoFromStorage()
  // Get all the buttons from the route
  this.allButton = getRouteButtons(routeInfo, this.$route.name)

  /**
   *
   * @param routeInfo The route info you need to process
   * @param name The path's name you need to fetch
   * @return Buttons of the route
   */
  function getRouteButtons (routeInfo, name) {
    for (let i = 0; i < routeInfo.length; i++) {
      if (routeInfo[i].name === name) {
        return routeInfo[i].children === null ? null : routeInfo[i].children
      } else if (routeInfo[i].children != null) {
        return getRouteButtons(routeInfo[i].children, name)
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
  for (; ;) {
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

/* Packing result to promise */
function transfer (result) {
  return Promise.resolve(result)
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
