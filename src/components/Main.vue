<template>
  <div>
    <ul class="nav-menu bg-dark">
          <li class="nav-item"><a href="index.php">Главная</a></li>
          <li class="nav-item"><a href="report.php">About</a></li>
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
