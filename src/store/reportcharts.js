import Vue from 'vue'

export default {
  state: {
    chartdata: [], // Data for chart
    sensorscheck: [], // checboxes, that sensors to show
    isLoaded: false // flag for data load
  },
  mutations: {
    setChartDatasetM (state, payload) {
      // state.datasets.data = payload.map(data => parseInt(data.value, 10))
      state.chartdata = payload
      state.isLoaded = true
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
    },
    setSensorsCheckM (state, payload) {
      state.sensorscheck = payload
      for (let i = 0; i < state.sensorscheck.length; i++) {
        Vue.set(state.sensorscheck[i], 'checked', true)
      }
      console.log('load sensors check')
      console.log(payload)
    }
  },
  actions: {
    setChartDataset (context, payload) {
      context.commit('setChartDatasetM', payload)
    },
    setSensorsCheck (context) {
      context.commit('setSensorsCheckM', context.getters.getSensorsNames)
    }
  },
  getters: {
    getLabels (state) {
      return state.chartdata.map(data => data.vdatetime)
    },
    getData (state) {
      return state.chartdata
    }
  }
}
