<template>
	<section class="main">
		<div class="room">
			<status />
			<mapping />
		</div>
	</section>
</template>

<script>
	import Mapping from '~/components/Mapping.vue'
	import Status from '~/components/Status.vue'
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {}
		},
		components: {
			Mapping,
			Status
		},
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
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000000;

		.room {
			height: 100vh;
			width: 122.22vh;
			position: relative;
			background-image: url('/map/room.jpg');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
	}
</style>
