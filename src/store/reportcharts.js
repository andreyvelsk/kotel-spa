import Vue from 'vue'

export default {
  state: {
    chartdata: [], // Data for chart
    sensorscheck: [1], // checboxes, that sensors to show
    isLoaded: false // flag for data load
  },
  mutations: {
    setChartDatasetM (state, payload) {
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
    setSensorsCheck (context, payload) {
      context.commit('setSensorsCheckM', payload)
      context.dispatch('setChartDataset', 125)
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
