<template>
  <div class="sensors-list">
    <div class="form-check"
      v-for="sensor in this.$store.getters.getSensorsNames"
      :key="sensor.id_sensor"
    >
      <label class="form-check-label"
        :for='"interval" + sensor.id_sensor'
      >
        <input class="form-check-input" type="radio"
          :id='"interval" + sensor.id_sensor'
          :value='parseInt(sensor.id_sensor)'
          name='intervals'
        >
          <span>{{sensor.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass"> //styles are the same with Sensors.vue

</style>
