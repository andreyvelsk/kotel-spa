import {Line} from 'vue-chartjs'
export default ({
  mixins: [Line],
  data () {
    return {
      datacollection: {
        labels: this.$store.getters.getLabels,
        datasets: [
          {
            label: 't pod',
            data: this.$store.getters.getData
          }
        ]
      }
    }
  },
  mounted () {
    console.log('LineChart mounted')
    console.log(this.datacollection)
    this.renderChart(this.datacollection,
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          onClick: function () { return 0 }
        }
      }
    )
  }
})
