import Vue from 'vue'

export default {
  state: {
    chartdata: [], // Data for chart
    sensorscheck: [1], // checboxes, that sensors to show
    interval: 150, // interval of data for chart in hours
    isLoaded: false // flag for data load
  },
  mutations: {
    setChartDatasetM (state, payload) {
      state.chartdata = payload

      function getColorById (id) {
        let colorBin = ''
        colorBin = id.toString(2)
        if (colorBin.length < 3) {
          let length = colorBin.length
          for (let i = length; i < 3; i++) {
            colorBin = '0' + colorBin
          }
        }
        function reverse (s) {
          return s.split('').reverse().join('')
        }
        colorBin = reverse(colorBin)
        return `rgba(${[255 * colorBin[0], 255 * colorBin[1], 255 * colorBin[2], 0.1].join(',')})`
      }

      getColorById(6)
      for (let i = 0; i < state.sensorscheck.length; i++) {
        Vue.set(state.chartdata.datasets[i], 'backgroundColor', getColorById(state.sensorscheck[i]))
      }

      console.log('setChartDataset')
      console.log(state.chartdata)
      state.isLoaded = true
    },
    setSensorsCheckM (state, payload) {
      state.sensorscheck = payload
    }
  },
  actions: {
    setSensorsCheck (context, payload) {
      context.commit('setSensorsCheckM', payload)
      context.dispatch('setChartDataset', context.state.interval)
    }
  },
  getters: {
    getData (state) {
      return state.chartdata
    },
    getSensorsCheckLength (state) {
      return state.sensorscheck.length
    }
  }
}
