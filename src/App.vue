<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    headerPage: Header
  },
  created () {
    this.$api.get('getjson.php')
      .then(payload => this.$store.dispatch('setSensorsAssync', payload.data))
  }
}
</script>

<style>

</style>
