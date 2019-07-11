import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './views/Login.vue'
import Alumno from './views/Alumno.vue'
import Profesor from './views/Profesor.vue'
import Selector from './views/Selector.vue'
import Admin from './views/Admin.vue'

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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/selector',
      name: 'Selector',
      component: Selector
    }

  ]
})
