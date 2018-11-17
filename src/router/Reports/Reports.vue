<template>
    <div class="container">
      {{
        this.$store.getters.getSensorsNames
      }}
      <div class="Chart">
          <h2>Отчет по температуре</h2>

          <div class="sensors-list">
            <sensors-report
            v-for="sensor in this.$store.state.reportcharts.sensorscheck"
            :key="sensor.name"
            :sensorId="sensor.id_sensor"
            :sensorName="sensor.name"
            :sensorChecked="sensor.checked"
            >
            </sensors-report>
          </div>

          <chart-report
          v-if='this.$store.state.reportcharts.isLoaded'
          :chartData='this.$store.getters.getData'
          ></chart-report>
          <button class="btn btn-success"
          @click="getApiData(6)"
          >LOAD</button>
      </div>
        {{this.$store.getters.getData}}
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
    addData () {
      this.$store.dispatch('addData')
      console.log(this.$store.state.reportcharts.chartdata)
    },
    getApiData (interval) {
      this.$api.get('getchartdata.php?interval=' + interval + '&sensor[]=2&sensor[]=4')
        .then(payload => this.$store.dispatch('setChartDataset', payload.data))
      console.log('chart data from api loaded')
    }
  },
  computed: {
    getChartData () {
      return this.$store.getters.getLabels
    }
  },
  created () {
    this.getApiData(25)
  }
}
</script>

<style lang="sass">
  .sensors-list
    display: flex
    justify-content: space-around
</style>
