<template>
  <div class="sensors-list">
    <div class="form-check"
      v-for="interval in this.$store.state.reportcharts.intervals"
      :key="interval.value"
    >
      <label class="form-check-label"
        :for='"interval" + interval.value'
      >
        <input class="form-check-input" type="radio"
          :id='"interval" + interval.value'
          :value='interval.value'
          v-model='getInterval'
          name='intervals'
        >
          <span>{{interval.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getInterval: {
      get () {
        return this.$store.state.reportcharts.interval
      },
      set (value) {
        this.$store.dispatch('setInterval', value)
        console.log('interval changes')
        console.log(this.$store.state.reportcharts.interval)
      }
    }
  }
}
</script>

<style lang="sass"> //styles are the same with Sensors.vue

</style>
