import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/container_login'
import Home from '../components/home/home'

import jwtDecode from 'jwt-decode'


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

  }
]

let router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth))
      if(to.matched.some(record => record.meta.requiresAuth)) {
          if (localStorage.getItem('token') == null) {
            console.log(1234);
              next({
                  path: '/',
                 
              })
          } else {
              try {
                jwtDecode(localStorage.token)
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
