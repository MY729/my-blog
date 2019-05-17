import axios from 'axios'

const service = axios.create({
  timeout: 20000,
  withCredentials: true // 跨站点访问控制请求
})

export default service