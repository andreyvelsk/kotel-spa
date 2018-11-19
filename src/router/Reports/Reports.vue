<template>
    <div class="container" >
      <div class="Chart">
        <h2>Отчет по температуре</h2>
        <div class="sensors-list">
            <sensors-report
            v-for="sensor in this.$store.getters.getSensorsNames"
            :key="sensor.id_sensor"
            :sensorId="parseInt(sensor.id_sensor)"
            :sensorName="sensor.name"
            >
            </sensors-report>
        </div>
          <chart-report
          :chartData='this.$store.getters.getData'
          ></chart-report>
          <button class="btn btn-success"
          @click="getApiData(6)"
          >LOAD</button>
      </div>
    </div>
</template>

<script>
import ChartReport from './LineCharts'
import SensorsReport from './Sensors'

export default {
  components: {
    ChartReport,
    SensorsReport
  },
  methods: {
    getApiData (interval) {
      this.$store.dispatch('setChartDataset', interval)
    }
  },
  mounted () {
    this.getApiData(125)
  }
}
</script>

<style lang="sass">
  .sensors-list
    display: flex
    justify-content: space-around
</style>
