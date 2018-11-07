<template>
  <div>
    <ul class="nav-menu bg-dark">
      <router-link
        v-for='link in this.$store.state.menu.menu'
        tag="li"
        class="nav-item"
        :to='link.link'
        :key="link.title"
        >
          <a>{{link.title}}</a>
        </router-link>
    </ul>
  </div>

</template>

<script>

</script>

<style lang="sass">
  .nav
    &-menu
      background-color: #31708f
      border-color: #bce8f1
      list-style: none
      margin: 0
      margin-bottom: 20px
      display: flex
      flex-flow: row wrap
      justify-content: flex-start

    &-item
      a
        color: #fff
        display: block
        padding: 15px 20px
        text-decoration: none
        &:hover
          background-color: #17a2b8
        &:active
          background-color: #17a2b8
</style>
