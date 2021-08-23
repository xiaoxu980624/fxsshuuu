
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list from '../views/list.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// // 导航路由 修改标题  
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('您还没有登录，请先登录');
//     next('/login');
//   }
// })




export default router
