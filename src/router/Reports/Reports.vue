<template>
    <div class="container">
        {{this.$store.getters.getData}}
        <div class="Chart">
            <h2>Linechart</h2>
            <line-example
            v-if='this.$store.state.reportcharts.isLoaded'
            ></line-example>
        </div>
    </div>
</template>

<script>
import LineExample from './LineCharts'
export default {
  components: {
    LineExample
  },
  data () {
      return {
          chartLoaded: false
      }
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

    this.resource = this.$resource('http://194.67.211.50/getchartdata.php?interval=3')
    this.resource.get().then(response => response.json())
      .then(payload => this.$store.dispatch('setChartDataset', payload))
      .then(console.log('loaded data from api'))
  }
}
</script>

<style>

</style>
