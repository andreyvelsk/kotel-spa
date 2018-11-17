<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" :id="'sensor'+sensorId">
        <label class="form-check-label" :for="'sensor'+sensorId">
            {{sensorName}}
        </label>
    </div>
</template>

<script>
export default {
    props: {
    sensorId: String,
    sensorName: String
  }
}
</script>

<style lang="sass">
    .form-check
        display: inline-block
</style>
