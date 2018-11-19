<template>
    <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" 
            :value='sensorId'
            v-model='getSensorCheckbox'
            >
            {{sensorName}}
        </label>
    </div>
</template>

<script>
export default {
  props: {
    sensorId: Number,
    sensorName: String
  },
  computed: {
		getSensorCheckbox: {
			get () {
				return this.$store.state.reportcharts.sensorscheck
			},
			set (value) {
                this.$store.dispatch('setSensorsCheck', value)
                console.log('checkbox clicked')
			}
		}
  }
}
</script>

<style lang="sass">
    .form-check
        display: inline-block
</style>
