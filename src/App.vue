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
  }
}
</script>

<style>

</style>
