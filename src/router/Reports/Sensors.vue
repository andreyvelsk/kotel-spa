<template>
  <div class="sensors-list">
    <div class="form-check"
      v-for="sensor in this.$store.getters.getSensorsNames"
      :key="sensor.id_sensor"
    >
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox"
          :value='parseInt(sensor.id_sensor)'
          v-model='getSensorCheckbox'
        >
          <span>{{sensor.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getSensorCheckbox: {
      get () {
        return this.$store.state.reportcharts.sensorscheck
      },
      set (value) {
        this.$store.dispatch('setSensorsCheck', value)
        console.log('checkbox clicked')
        console.log(this.$store.state.reportcharts.sensorscheck)
      }
    }
  }
}
</script>

<style lang="sass">
  .sensors-list
    display: flex
    justify-content: flex-start
    margin-bottom: 30px
    input
      display: none
      &:checked+span
        background-color: #28a745
        color: #fff
      &+span
        padding: 10px
        border-radius: 10px
        background-color: #ececec
  .form-check
      display: inline-block
</style>
