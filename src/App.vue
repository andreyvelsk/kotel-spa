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
    // запись из api to vuex
    console.log('load sensors from api App.vue')

    this.resource = this.$resource('getjson.php')
    this.resource.get().then(response => response.json())
      .then(payload => this.$store.dispatch('setSensorsAssync', payload))
  }
}
</script>

<style>

</style>
