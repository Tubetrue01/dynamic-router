import request from '../utils/request'

function user () {
  return request({
    url: '/test/user',
    method: 'get'
  })
}

function role () {
  return request({
    url: '/test/role',
    method: 'get'
  })
}

export {
  user,
  role
}
