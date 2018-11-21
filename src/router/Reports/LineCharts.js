import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default ({
  extends: Line,
  mixins: [reactiveProp],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        pointBorderColor: 'red',
        legend: {
          display: true,
          onClick: function () { return 0 }
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'hour'
            }
          }]
        }
      }
    }
  },
  methods: {
    rendChart: function () {
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    console.log('LineChart mounted')
    this.rendChart()
  }
})
