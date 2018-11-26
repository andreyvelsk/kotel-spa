import Vue from 'vue'

export default {
  state: {
    chartdata: [], // Data for chart
    sensorscheck: [1], // checboxes, that sensors to show
    intervals: [
      {name: '3H', value: 3},
      {name: '6H', value: 6},
      {name: '12H', value: 12},
      {name: '24H', value: 24}
    ],
    interval: 3, // interval of data for chart in hours
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
        return `rgb(${[255 * colorBin[0], 255 * colorBin[1], 255 * colorBin[2]].join(',')})`
      }
      function getColorId (id) {
        if (state.sensorscheck.length > 0) {
          return state.sensorscheck[id]
        } else {
          return 1
        }
      }
      for (let i = 0; i < state.chartdata.datasets.length; i++) {
        Vue.set(state.chartdata.datasets[i], 'borderColor', getColorById(getColorId(i)))
        Vue.set(state.chartdata.datasets[i], 'fill', false)
        Vue.set(state.chartdata.datasets[i], 'pointRadius', 0)
      }

      console.log('setChartDataset')
      console.log(state.chartdata)
      state.isLoaded = true
    },
    setSensorsCheckM (state, payload) {
      state.sensorscheck = payload
      console.log('setSensorsCheck done')
    },
    setIntervalM (state, payload) {
      state.interval = payload
      console.log(state.interval)
      console.log(state.intervals)
    }
  },
  actions: {
    setSensorsCheck (context, payload) {
      context.dispatch('setSensorsCheckPromise', payload)
        .then(context.dispatch('setChartDataset', context.state.interval))
      // context.commit('setSensorsCheckM', payload)
      // context.dispatch('setChartDataset', context.state.interval)
    },
    setSensorsCheckPromise ({ commit }, payload) {
      return new Promise((resolve) => {
        commit('setSensorsCheckM', payload)
        console.log('setSensorsCheckPromise')
        resolve()
      })
    },
    setInterval (context, payload) {
      context.commit('setIntervalM', payload)
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
