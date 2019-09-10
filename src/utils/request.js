import axios from 'axios'
import ResultRtn from './result-rtn'
import { StatusCode } from './constant'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true, // 请求头携带cookies
  timeout: 15000 // 超时请求
})

// request拦截器
service.interceptors.request.use(function (config) {
  // 设置头信息
  // config.headers = {
  //     'Content-Type': "application/x-www-form-urlencoded'
  // }
  return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code
    const msg = response.data.msg
    switch (code) {
      case StatusCode.BedRequest:
        this.log('错误请求')
        break
      case StatusCode.NotFound:
        this.log('未登录')
        break
    }
    return new ResultRtn(code, msg, response.data.dataList[0])
    // return new ResultRtn(code, msg, JSON.parse(response.data.dataList))
  }
)

export default service
