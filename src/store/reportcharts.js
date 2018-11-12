export default {
  state: {
    chartdataValue: [],
    chartdataLabels: [],
    isLoaded: false
  },
  mutations: {
    setChartDatasetM (state, payload) {
      // state.datasets.data = payload.map(data => parseInt(data.value, 10))
      state.chartdataLabels = payload.map(data => data.vdatetime)
      state.chartdataValue = payload.map(data => Number(data.value))
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
      return state.chartdataLabels
    },
    getData (state) {
      return state.chartdataValue
    }
  }
}
