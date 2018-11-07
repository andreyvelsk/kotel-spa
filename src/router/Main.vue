<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6">
        <div class="row">

            <card-sensor
            v-for="sensor in this.$store.state.sensors.sensors"
            :key="sensor.name"
            :sensorName='sensor.name'
            :sensorValue='sensor.value'
            :sensorDate='sensor.datetime'
            >
            </card-sensor>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.col-xl-6 -->

      <div class="col-md-6">
        <img src="https://i.ytimg.com/vi/WkpbUn-0vPw/maxresdefault.jpg" alt="fff">
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    cardSensor: Card
  }
}
</script>

<style lang="sass">
  img
    width: 100%
</style>
