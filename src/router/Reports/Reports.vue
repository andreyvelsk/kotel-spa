<template>
    <div class="container" >
      <div class="Chart">
          <intervals-report></intervals-report>
          <sensors-report></sensors-report>
          <chart-report
          :chartData='this.$store.getters.getData'
          >
          </chart-report>
      </div>
    </div>
</template>

<script>
import ChartReport from './LineCharts'
import SensorsReport from './Sensors'
import IntervalsReport from './Intervals'

export default {
  components: {
    ChartReport,
    SensorsReport,
    IntervalsReport
  },
  methods: {
    getApiData (interval) {
      this.$store.dispatch('setChartDataset', interval)
    }
  },
  mounted () {
    this.getApiData(this.$store.state.reportcharts.interval)
  }
}
</script>

<style lang="sass">

</style>
