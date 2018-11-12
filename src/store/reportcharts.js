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
    }
  },
  actions: {
    setChartDataset (context, payload) {
      context.commit('setChartDatasetM', payload)
    }
  },
  getters: {
    getLabels (state) {
      return state.chartdata.map(data => data.vdatetime)
    },
    getData (state) {
      return state.chartdata.map(data => data.value)
    }
  }
}
