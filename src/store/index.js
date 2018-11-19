import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import sensors from './sensors'
import reportcharts from './reportcharts'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    menu,
    sensors,
    reportcharts
  },
  state: {
  }
})
