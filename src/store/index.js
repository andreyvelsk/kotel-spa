import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import sensors from './sensors'
import reportcharts from './reportcharts'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    menu,
    sensors,
    reportcharts
  },
  state: {
  },
  actions: {
    setChartDataset (context, interval) {
      axios.get('http://194.67.211.50/getchartdata.php?interval=' + interval + '&sensor[]=2&sensor[]=4')
        .then(payload => context.commit('setChartDatasetM', payload.data))
      console.log('chart data from api loaded')
    },
    setSensors (context) {
      axios.get('http://194.67.211.50/getjson.php')
        .then(payload => context.commit('setSensorsAssync', payload.data))
    }
  }
})
