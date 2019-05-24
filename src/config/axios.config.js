import axios from 'axios'

const service = axios.create({
  timeout: 20000,
  withCredentials: true // 跨站点访问控制请求
})

/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
  let { data, status, statusText: err_msg } = response
  return { data, status, err_msg }
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default service