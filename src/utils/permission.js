import { router, routerMap } from '../routers/router'
import Layout from '../views/index'
import { clearStorage, getRouterInfoFromStorage, getToken, saveRouterInfoFromStorage } from './utils'
import { getRolePermission } from '../api/user-api'
import { StatusCode } from './constant'

let routerInfo
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 判断是否登录
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (!routerInfo) {
        // 判断localStorage中是否有路由信息
        if (!getRouterInfoFromStorage()) {
          clearStorage()
          // 重新获取路由
          getRolePermission({ id: 1 }).then(result => {
            if (result.code === StatusCode.Success) {
              routerInfo = result.dataList
              // routerInfo = resPermission.concat(constRouterMap)
              saveRouterInfoFromStorage(routerInfo)
              addRouterAndNext(to, next)
            }
          })
        } else {
          routerInfo = getRouterInfoFromStorage()
          addRouterAndNext(to, next)
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

function addRouterAndNext (to, next) {
  routerInfo = filterRouter(routerInfo)
  router.addRoutes(routerInfo) // 添加动态路由
  next({ ...to, replace: true })
}

function filterRouter (routerInfo) {
  return routerInfo.filter(router => {
    if (router.component) {
      if (router.component === 'Layout') {
        router.component = Layout
      } else {
        router.component = routerMap[router.component]
      }
    }
    if (router.children && router.children.length) {
      router.children = filterRouter(router.children)
    }
    return true
  })
}
