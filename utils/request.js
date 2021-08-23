/*
 * @Author: your name
 * @Date: 2021-05-31 16:24:55
 * @LastEditTime: 2021-06-01 11:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\项目\vue\utils\request.js
 */
// axios拦截器
// 1  导入axios依赖包
import axios from 'axios'


//  2  创建axios对象信息
const Server = axios.create({
  baseURL: '',
  timeout: 5000
})


// 3  定义请求拦截器（前置）
//axios设置请求拦截器
Server.interceptors.request.use(function (config) {
  // config.headers.mytoken = 'nihao' //设置响应头
  console.log('请求拦截器', config);
  return config
}, function (error) {
  return Promise.reject(error)
})


// 4  定义响应拦截器格式化返回的数据（后置）
//axios设置响应拦截器
Server.interceptors.response.use(response => {
  console.log('响应拦截器', response);
  return response.data //拦截处理响应结果，直接返回需要的数据
}, err => {
  return Promise.reject(err)
})

// 5抛出对象  main.js引入拦截器信息
export default Server;