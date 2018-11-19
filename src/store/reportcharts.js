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
      function getRandomColor (id) {
        const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
        const randomByte = () => randomNumber(0, 255)
        const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), '0.3'].join(',')})`
        return randomCssRgba()
      }
      for (let i = 0; i < state.chartdata.datasets.length; i++) {
        Vue.set(state.chartdata.datasets[i], 'backgroundColor', getRandomColor())
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
