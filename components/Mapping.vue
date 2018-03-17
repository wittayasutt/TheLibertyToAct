<template>
  <section class="mapping">
    <clock />
    <window />
  </section>
</template>

<script>
  import Clock from '~/components/Item/Clock.vue'
  import Window from '~/components/Item/Window.vue'

  export default {
  	components: {
  		Clock,
  		Window
  	}
  }
</script>

<style lang="scss" scoped>
  .mapping {
  	height: 100%;
  	widows: 100%;
  }
</style>
