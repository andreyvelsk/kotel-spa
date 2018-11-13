import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default ({
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData'],
  data () {
    return {
      datacollection: {
        labels: this.$store.getters.getLabels,
        datasets: [
          {
            label: 't подачи',
            backgroundColor: 'rgba(255,0,0,0.4)',
            data: this.$store.getters.getData
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          onClick: function () { return 0 }
        }
      }
    }
  },
  computed: {
    rendChart () {
      this.renderChart(this.datacollection, this.options)
    }
  },
  mounted () {
    console.log('LineChart mounted')
    console.log(this.datacollection)
    this.rendChart()
  }
})
