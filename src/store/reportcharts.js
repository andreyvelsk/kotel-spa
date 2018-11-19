import Vue from 'vue'

export default {
  state: {
    chartdata: [], // Data for chart
    sensorscheck: [1], // checboxes, that sensors to show
    isLoaded: false // flag for data load
  },
  mutations: {
    setChartDatasetM (state, payload) {
      // state.datasets.data = payload.map(data => parseInt(data.value, 10))
      state.chartdata = payload
      console.log('setChartDataset')
      console.log(state.chartdata)

      for (let i = 0; i < state.chartdata.datasets.length; i++) {
        if (i === 0) {
          Vue.set(state.chartdata.datasets[i], 'backgroundColor', 'rgba(255,0,0,0.3)')
        }
        if (i === 1) {
          Vue.set(state.chartdata.datasets[i], 'backgroundColor', 'rgba(0,244,0,0.3)')
        }
      }
      state.isLoaded = true
    },
    setSensorsCheckM (state, payload) {
      state.sensorscheck = payload
    }
  },
  actions: {
    setChartDataset (context, payload) {
      context.commit('setChartDatasetM', payload)
    },
    setSensorsCheck (context, payload) {
      context.commit('setSensorsCheckM', payload)
    }
  },
  getters: {
    getData (state) {
      return state.chartdata
    },
    // return some properties of an object
    getSensorsNames (state) {
      return state.sensors.map(key => {
        // eslint-disable-next-line camelcase
        return (({ id_sensor, name }) => ({ id_sensor, name }))(key)
      })
    }
  }
}
