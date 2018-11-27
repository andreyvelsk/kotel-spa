<template>
  <div class="sensors-list">
    <div class="form-check"
      v-for="sensor in this.$store.getters.getSensorsNames"
      :key="sensor.id_sensor"
    >
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox"
          :value='parseInt(sensor.id_sensor)'
          v-model='getSensorCheckbox'
        >
          <span>{{sensor.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getSensorCheckbox: {
      get () {
        return this.$store.state.reportcharts.sensorscheck
      },
      set (value) {
        this.$store.dispatch('setSensorsCheck', value)
        console.log('checkbox clicked')
        console.log(this.$store.state.reportcharts.sensorscheck)
      }
    }
  }
}
</script>

<style lang="sass">
  $mobile-width: 525px
  $tablet-width: 768px
  $desktop-width: 1024px

  @mixin mobile
    @media (max-width: #{$mobile-width})
      @content
  @mixin tablet
    @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px})
      @content

  @mixin desktop
    @media (min-width: #{$desktop-width})
      @content

  .sensors-list
    display: flex
    justify-content: flex-start
    margin-bottom: 30px
    @include mobile
      font-size: 10px
    input
      display: none
      &:checked+span
        background-color: #28a745
        color: #fff
      &+span
        padding: 10px
        border-radius: 10px
        background-color: #ececec
        @include mobile
          padding: 5px
  .form-check
      display: inline-block

</style>
