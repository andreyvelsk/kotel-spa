<template>
    <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" :checked='sensorChecked'>
            {{sensorName}}
        </label>
    </div>
</template>

<script>
export default {
  props: {
    sensorId: String,
    sensorName: String,
    sensorChecked: Boolean
  },
  computed: {
		getSensorCheckbox: {
			get () {
				return this.$store.state.reportcharts.sensorscheck
			},
			set (value) {
				this.$store.state.sensors.sensorcheck.checked = value
			}
		}
  }
}
</script>

<style lang="sass">
    .form-check
        display: inline-block
</style>
