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
  created() {
      //запись из api to vuex

        console.log("staff is empty. load staff from api App.vue")

        this.resource = this.$resource('getjson.php')
        this.resource.get().then(response => response.json())
        .then(staff => console.log(staff))
  }
}
</script>

<style>

</style>
