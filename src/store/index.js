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
  actions: {
    setChartDataset (context, interval) {
      var sensorsId = ''
      for (let i = 0; i < context.state.reportcharts.sensorscheck.length; i++) {
        sensorsId += '&sensor[]=' + context.state.reportcharts.sensorscheck[i]
      }
      console.log(sensorsId)
      axios.get('http://194.67.211.50/getchartdata.php?interval=' + interval + sensorsId)
        .then(payload => context.commit('setChartDatasetM', payload.data))
      console.log('chart data from api loaded')
    },
    setSensors (context) {
      axios.get('http://194.67.211.50/getjson.php')
        .then(payload => context.commit('setSensorsAssyncM', payload.data))
    }
  }
})
