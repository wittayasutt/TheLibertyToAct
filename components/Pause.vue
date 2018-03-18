<template>
  <div class="stop" :class="{ pause }"></div>
</template>

<script>
  import MessageBox from '~/components/MessageBox.vue'
  import { mapGetters } from 'vuex'

  export default {
  	computed: {
  		...mapGetters({
  			pause: 'getPause'
  		})
  	}
  }
</script>

<style lang="scss">
  .stop {
    display: none;
  	height: 100%;
  	width: 100%;
  	position: absolute;
  	top: 0;
  	left: 0;
  	z-index: 40;
  }

  .pause {
  	display: flex !important;
  }
</style>
