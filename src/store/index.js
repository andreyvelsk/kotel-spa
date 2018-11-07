import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import sensors from './sensors'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    sensors
  },
  state: {

  },
  getters: {

  }
})
