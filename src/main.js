/*
 * @Author: your name
 * @Date: 2021-05-31 15:17:19
 * @LastEditTime: 2021-06-17 20:38:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\项目\vue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
{/* <link rel="stylesheet" type="text/css" href="./iconfont.css"></link> */}


// axios依赖的配置
import axios from '../utils/request'
Vue.prototype.$axios = axios;
// // 使用列表接口
// axios.defaults.baseURL=""
// element-ui 组件库配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// vant组件库配置
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 图片懒加载 (轮播图图片)
import { Lazyload } from 'vant';
Vue.use(Lazyload);

// 全局过滤的方法
Vue.filter("fMoney",(val)=>{
  //格式化的操作
  return "￥"+Number(val).toFixed(2);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
