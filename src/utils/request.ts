import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5050
})
//请求拦截器，在请求发送之前触发
request.interceptors.request.use(config => {


  return config
})

//响应拦截器，在拿到响应之后触发
request.interceptors.response.use(response =>{

  return response.data
}, err => {
  let msg = ''
  let status = err.response.status
  switch (status) {
    case 401:
      msg = 'Token过期'
      break
    case 403:
      msg = '无权访问'
      break
    case 404:
      msg = '请求地址错误'
      break
    case 500:
      msg = '服务器出现问题'
      break
    default:
      msg = '网络出现问题'
  }
  ElMessage({
    type: 'error',
    message: msg
  })
  return Promise.reject(err)
})

export default request