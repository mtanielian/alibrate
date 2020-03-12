import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/container_login'
import Home from '../components/home/home'
import Rankings from '../components/rankings/container'

import jwtDecode from 'jwt-decode'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
    meta : {
      requiresAuth : false
    }
  },
  {
    path : '/home',
    component : Home,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : "/rankings",
    component : Rankings,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : "*",
    redirect : "/"
  }
]

let router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth))
      if(to.matched.some(record => record.meta.requiresAuth)) {
          if (!store.state.token) {
              next({
                  path: '/',
              })
          } else {
              try {
                jwtDecode(store.state.token)
                next();
              
              } catch {
                console.log("token inválido / Expirado");
                next({
                  path: '/',
                })
              }             
          }
      } else {
        next();
      }
})  

export default router
