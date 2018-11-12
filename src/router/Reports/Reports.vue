<template>
    <div class="container">
        <div class="Chart">
            <h2>Отчет по температуре</h2>
            <line-example
            v-if='this.$store.state.reportcharts.isLoaded'
            ></line-example>
            <button class="btn btn-success">LOAD</button>
        </div>
    </div>
</template>

<script>
import LineExample from './LineCharts'

export default {
  components: {
    LineExample
  },
  computed: {
      getChartData() {
          return this.$store.getters.getLabels
      }
  },
  created () {
    console.log(this.$store.state.reportcharts.isLoaded)
    // запись из api to vuex
    console.log('load chartdata from api Report.vue')

    this.resource = this.$resource('getchartdata.php?interval=3')
    this.resource.get().then(response => response.json())
    .then(payload => this.$store.dispatch('setChartDataset', payload))

  }
}
</script>

<style>

</style>
