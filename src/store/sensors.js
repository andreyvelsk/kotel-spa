export default {
  state: {
    sensors: []
  },
  mutations: {
    setSensorsAssyncM (state, payload) {
      state.sensors = payload
      console.log('Загружены данные из getjson.php')
      console.log(payload)
    }
  },
  actions: {
    setSensorsAssync (context, payload) {
      context.commit('setSensorsAssyncM', payload)
    }
  },

  getters: {
  }
}
