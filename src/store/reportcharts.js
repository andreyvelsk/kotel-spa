export default {
  state: {
    chartdata: [],
    isLoaded: false
  },
  mutations: {
    setChartDatasetM (state, payload) {
      // state.datasets.data = payload.map(data => parseInt(data.value, 10))
      state.chartdata = payload
      state.isLoaded = true
      console.log('setChartDataset')

      for (let i = 0; i < state.chartdata.datasets.length; i++) {
        state.chartdata.datasets[i]['backgroundColor'] = 'rgba(255,0,0,0.3)'
      }
    },
    addDataM (state) {
      state.chartdata[state.chartdata.length - 1].value = '45.5'
    }
  },
  actions: {
    setChartDataset (context, payload) {
      context.commit('setChartDatasetM', payload)
    },
    addData (context) {
      context.commit('addDataM')
    }
  },
  getters: {
    getLabels (state) {
      return state.chartdata.map(data => data.vdatetime)
    },
    getData (state) {     
    }
  }
}
