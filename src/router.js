import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './views/Login.vue'
import Alumno from './views/Alumno.vue'
import Profesor from './views/Profesor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/alumno/:codigo',
      name: 'Alumno',
      component: Alumno
    },
    {
      path: '/profesor/:codigo',
      name: 'Profesor',
      component: Profesor
    }
  ]
})
