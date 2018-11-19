<template>
    <div class="container">
      
      {{
        this.$store.getters.getSensorsNames
      }}
      
      <div class="sensors-list">
        <sensors-report
        v-for="sensor in this.$store.getters.getSensorsNames"
        :key="sensor.id_sensor"
        :sensorId="parseInt(sensor.id_sensor)"
        :sensorName="sensor.name"
        >
        </sensors-report>
      </div>

      <div class="Chart">
          <h2>Отчет по температуре</h2>

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
    getApiData (interval) {
      this.$api.get('getchartdata.php?interval=' + interval + '&sensor[]=2&sensor[]=4')
        .then(payload => this.$store.dispatch('setChartDataset', payload.data))
      console.log('chart data from api loaded')
    }
  },
  created () {
    this.getApiData(125)
  }
}
</script>

<style lang="sass">
  .sensors-list
    display: flex
    justify-content: space-around
</style>
