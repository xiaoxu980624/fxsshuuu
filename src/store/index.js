/*
 * @Author: your name
 * @Date: 2021-05-31 15:17:19
 * @LastEditTime: 2021-06-16 14:43:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit Vuex
 * @FilePath: \新建文件夹\项目\vue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 持久化配置
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key:'yx_vuex'
})


export default new Vuex.Store({
  state: {
       list:[]
  },
  mutations: {
    // 添加
     add(state,data){
      state.list.push(data)
        
     },
     del(state,index){
       state.list.splice(index,1)
   },
   clear(){
       this.list==""
   }
  },
  actions: {
  },
  modules: {
  },
  getters: {
       
  },
  // 持久化  配置
  plugins: [vuexLocal.plugin]
})
