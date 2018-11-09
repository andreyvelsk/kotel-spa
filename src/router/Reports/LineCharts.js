import {Line} from 'vue-chartjs'

export default ({
  mixins: [Line],
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: this.$store.state.reportcharts.datasets
    }, {responsive: true, maintainAspectRatio: false})
  }
})
