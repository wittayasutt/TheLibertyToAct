<template>
	<section class="main">
		<audio autoplay loop id="background_song">
			<source src="sound/Derrick Hodge  World Go Round.mp3" type="audio/mp3">
		</audio>

		<div class="debug">
			<p>Day: {{day}}</p>
			<p>Peroid: {{period}}</p>
		</div>
		<img src="map/day-wheel.png" alt="day-wheel" class="day-wheel" :style="{'transform': 'rotate(' + rotate + 'deg)'}">
		<div class="room">
			<div class="credit" @click="credit = true">
				<i class="fa fa-caret-down"></i>
			</div>
			<img src="/icon/credit.png" alt="credit" class="img-credit" :style="{ 'display': credit ? 'block' : 'none'}" @click="credit=false">
			<div class="black black-left"></div>
			<div class="black black-right"></div>
			<status />
			<!-- <mapping /> -->
			<pause />
			<objects />
			<message />
		</div>
	</section>
</template>

<script>
	import Mapping from '~/components/Mapping.vue'
	import Message from '~/components/Message.vue'
	import Objects from '~/components/Objects.vue'
	import Pause from '~/components/Pause.vue'
	import Status from '~/components/Status.vue'
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				credit: false,
				rotate: 45
			}
		},
		components: {
			Mapping,
			Message,
			Objects,
			Pause,
			Status
		},
		computed: {
			...mapGetters({
				day: 'getDay',
				period: 'getPeriod',
				event: 'getNowEvent',
				pause: 'getPause'
			})
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
		watch: {
			pause: function() {
				let times = 1
				if (this.event === 'sleep' || this.event === 'morePlay') times = 2
				if (this.event === 'overSleep') times = 3
				if (this.pause) {
					this.rotate -= 45 * times
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
		overflow: hidden;
		position: relative;

		.debug {
			position: absolute;
			top: 2%;
			left: 2%;
			color: #ffffff;
		}

		.day-wheel {
			height: 100vh;
			position: absolute;
			z-index: 0;
			transition: 2s;
		}

		.room {
			height: 100vh;
			width: 135.64vh;
			position: relative;
			background-image: url('/sprite/background.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;

			.credit {
				height: 10%;
				width: 10%;
				display: flex;
				// flex-direction: column;
				justify-content: center;
				align-items: flex-end;
				color: #ffffff;
				font-size: 2rem;
				background: $red;
				transform: rotate(45deg);
				position: absolute;
				top: -5%;
				right: -5%;
				cursor: pointer;
				z-index: 9999;
				transition: 0.2s;

				div {
					font-size: 1rem;
				}
			}

			.credit:hover {
				height: 12%;
				width: 12%;
			}

			.img-credit {
				height: 100%;
				width: 100%;
				position: absolute;
				z-index: 10000;
			}

			.black {
				height: 100%;
				width: 100%;
				background: #000000;
				position: absolute;
				z-index: 10000;
			}

			.black-left {
				left: -100%;
			}

			.black-right {
				right: -100%;
			}
		}
	}
</style>
