import axios from 'axios'

export function request(config) {
  // 1、创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000
  })

  // 2.1、axios请求拦截
  instance.inteceptors.request.use(config => {
    return config
  }, err => {

  })

  // 2.2、axios相应拦截
  instance.inteceptors.response.use(res => {
    return res.data
  }, err => {

  })
  
  // 3、发送正在的网络请求
  return instance(config)
}
