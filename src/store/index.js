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

      var period = Math.round(interval / 2) // period of data (for example, select every 10 minute)

      console.log('current period: ' + period)

      axios.get('http://194.67.211.50/getchartdata.php?period=' + period + '&interval=' + interval + sensorsId)
        .then(payload => {
          context.commit('setChartDatasetM', payload.data)
          console.log('API chart data is loaded')
        },
        error => console.log(`error loading API chart data: ${error}`)
        )
    },
    setSensors (context) {
      axios.get('http://194.67.211.50/getjson.php')
        .then(payload => {
          context.commit('setSensorsAssyncM', payload.data)
          console.log('sensors data from api loaded')
        },
        error => console.log(`error loading API sensors data: ${error}`)
        )
    }
  }
})
