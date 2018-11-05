import Vue from 'vue'
import Router from 'vue-router'
import Main from './Main'

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
    }
  ],
  mode: 'history'
})
