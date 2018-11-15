<template>
    <div class="container">
      {{this.$store.getters.getData}}
        <div class="Chart">
            <h2>Отчет по температуре</h2>
            <line-example
            v-if='this.$store.state.reportcharts.isLoaded'
            :chartData='this.$store.getters.getData'
            ></line-example>
            <button class="btn btn-success"
            @click="getApiData(6)"
            >LOAD</button>
        </div>
    </div>
</template>

<script>
import LineExample from './LineCharts'

export default {
  components: {
    LineExample
  },
  methods: {
    addData () {
      this.$store.dispatch('addData')
      console.log(this.$store.state.reportcharts.chartdata)
    },
    getApiData (interval) {
      this.$api.get('getchartdata.php?interval=' + interval + '&sensor[]=2&sensor[]=4')
        .then(payload => this.$store.dispatch('setChartDataset', payload.data))
      console.log('data from api loaded')
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

<style>

</style>
