<template>
	<section class="main">
		The Liberty To Act
	</section>
</template>

<script>
	export default {
		data() {
			return {
				top: 0,
				left: 0
			}
		},
		components: {},
		methods: {
			escapeKeyListener: function(evt) {
				if (evt.keyCode === 37) {
					console.log('click left')
				}
				if (evt.keyCode === 38) {
					console.log('click up')
				}
				if (evt.keyCode === 39) {
					console.log('click right')
				}
				if (evt.keyCode === 40) {
					console.log('click down')
				}
			}
		},
		mounted() {
			document.addEventListener('keyup', this.escapeKeyListener)
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		min-height: 100vh;
		min-width: 100vw;
		position: fixed;
		background: blue;
	}
</style>
