// 引入网络请求模块
import axios from 'axios'

export function request1 (config) {
  // 实例化axios对象
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })
  return instance(config)
}
