import request from '../utils/request'

// 登录
function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

function getAllPermission (data) {
  return request({
    url: '/user/permission',
    method: 'get',
    data
  })
}

function getRolePermission (data) {
  return request({
    url: '/user/role/permission',
    method: 'post',
    data
  })
}

function updatePermission (data) {
  return request({
    url: '/user/role/permission',
    method: 'put',
    data
  })
}

export {
  login,
  logout,
  getAllPermission,
  getRolePermission,
  updatePermission
}
