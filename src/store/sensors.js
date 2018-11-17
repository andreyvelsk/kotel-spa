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
      context.dispatch('setSensorsCheck')
    }
  },

  getters: {
    // return some properties of an object
    getSensorsNames (state) {
      return state.sensors.map(key => {
        // eslint-disable-next-line camelcase
        return (({ id_sensor, name }) => ({ id_sensor, name }))(key)
      })
    }
  }
}
