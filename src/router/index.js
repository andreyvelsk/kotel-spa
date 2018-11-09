import Vue from 'vue'
import Router from 'vue-router'
import Main from './Main/Main'
import Reports from './Reports/Reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/worker',
      component: Main
    },
    {
      path: '/reports',
      component: Reports
    }
  ],
  mode: 'history'
})
