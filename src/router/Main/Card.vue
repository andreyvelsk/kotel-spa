<template>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-header bg-info text-white">
        {{sensorName}}
      </div>
      <div class="card-body">
        <h3>
          {{sensorValue}}
        </h3>
      </div>
      <div class="card-footer">
        {{sensorDate}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    sensorDate: String,
    sensorValue: String,
    sensorName: String
  }
}
</script>

<style lang="sass">
  .card
    margin-bottom: 20px

</style>
