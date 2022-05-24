// 二次封装发送请求的函数
import axios from 'axios'

// 基础路径/api 传入的路径会自动拼接到/api后面
const myAxios = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export default myAxios