<template>
	<section class="objects">
		<!-- objects -->
		<img src="/character/character_0008_Layer-22.png" alt="sunburn" class="sunburn2" :class="{ show: event==='sunburn2' }">

		<img src="/sprite/game-jam-compose-home-new-color-for-export_0036_fan.png" alt="fan" class="fan">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0029_clock.png" alt="clock" class="clock" :class="{ show: showitem('clock') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0025_work-table.png" alt="work-table" class="work-table">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0016_chair.png" alt="chair" class="chair">
		<!-- <img src="/sprite/game-jam-compose-home-new-color-for-export_0019_Layer-33.png" alt="Layer-33" class="Layer-33"> -->
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0020_Layer-44.png" alt="Layer-44" class="Layer-44">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0018_sun.png" alt="sun" class="sun" :class="{ show: showitem('sun') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0017_window.png" alt="window" class="window" :class="{ show: showitem('window') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0040_klui.png" alt="klui" class="klui" :class="{ show: showitem('recorder') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0021_bed.png" alt="bed" class="bed" :class="{ show: showitem('bed') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0013_Layer-39.png" alt="Layer-39" class="Layer-39" :class="{ show: showitem('bed') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0015_bed-table.png" alt="bed-table" class="bed-table">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0006_Layer-37.png" alt="Layer-37" class="Layer-37" :class="{ show: showitem('cherphang') }">
		<img src="/sprite/Behind Table.png" alt="behind-table" class="behind-table">
		<img src="/sprite/shirt.png" alt="shirt" class="shirt">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0035_Layer-12.png" alt="right-table" class="right-table">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0003_Layer-45.png" alt="Layer-45" class="Layer-45">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0004_Layer-46.png" alt="Layer-46" class="Layer-46" :class="{ show: showitem('mat') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0023_sock1.png" alt="sock1" class="sock1" :class="{ show: showitem('sock') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0038_sock3.png" alt="sock3" class="sock3" :class="{ show: showitem('sock') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0037_sock2.png" alt="sock2" class="sock2" :class="{ show: showitem('sock') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0039_fitbit.png" alt="fitbit" class="fitbit" :class="{ show: showitem('fidget') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0041_pig.png" alt="pig" class="pig" :class="{ show: showitem('pig') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0030_coin.png" alt="coin" class="coin" :class="{ show: showitem('pig')}">
		<img src="/sprite/laptop2.png" alt="laptop" class="laptop" :class="{ show: showitem('computer') }">
		<img src="/sprite/paper.png" alt="paper" class="paper" :class="{ show: showitem('paper') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0008_pen.png" alt="pen" class="pen" :class="{ show: showitem('paper') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0014_phone.png" alt="phone" class="phone" :class="{ show: showitem('phone') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0033_pot-2.png" alt="pot-2" class="pot-2" :class="{ show: showitem('pot') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0034_lay.png" alt="lay" class="lay" :class="{ show: showitem('lay') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0026_mama.png" alt="mama" class="mama" :class="{ show: showitem('mama') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0000_Layer-47.png" alt="Layer-47" class="Layer-47" :class="{ show: showitem('self') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0002_Layer-49.png" alt="Layer-49" class="Layer-49" :class="{ show: showitem('self') }">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0001_Layer-48.png" alt="Layer-48" class="Layer-48" :class="{ show: showitem('self') }">

		<!-- clock -->
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0027_clock-tick-small.png" alt="clock-tick-small" class="clock-tick-small" :class="{ show: showitem('clock') }" :style="{
			'transform': 'rotate(' + longRotate + 'deg)'}">
		<img src="/sprite/game-jam-compose-home-new-color-for-export_0028_clock-tick.png" alt="clock-tick" class="clock-tick" :class="{ show: showitem('clock') }" :style="{
			'transform': 'rotate(' + shortRotate + 'deg)'}">

		<!-- mapping -->
		<bed />
		<cherphang />
		<computer />
		<clock />
		<fidget />
		<mama />
		<paper />
		<phone />
		<pig />
		<recorder />
		<self />
		<window />

		<!-- character -->
		<img src="/character/character_0000_Layer-29.png" alt="eat" class="eat" :class="{ show: event==='eat' }">
		<img src="/character/character_0002_game-jam-compose-home-new-color-for-export_0016_chair-copy.png" alt="play" class="play" :class="{ show: event==='error' }">
		<img src="/character/character_0003_game-jam-compose-home-new-color-for-export_0016_chair-copy-2.png" alt="play" class="play2" :class="{ show: event==='morePlay' }">
		<img src="/character/character_0004_game-jam-compose-home-new-color-for-export_0016_chair.png" alt="play" class="play3" :class="{ show: event==='work' || event==='play' }">
		<img src="/character/character_0005_Layer-22-copy.png" alt="character sunburn" class="sunburn" :class="{ show: event==='sunburn' }">
		<img src="/character/character_0006_Layer-23.png" alt="cherprang" class="cherprang" :class="{ show: event==='lookAtCherprang' }">
		<img src="/character/character_0009_Layer-21.png" alt="meditate" class="meditate" :class="{ show: event==='meditate' }">
		<img src="/character/character_0010_Layer-20.png" alt="nap" class="nap" :class="{ show: event==='nap' && showitem('bed')}">
		<img src="/character/character_0012_Layer-4.png" alt="eating fail" class="eatingfail" :class="{ show: event==='dropMama' }">
		<img src="/character/character_0013_Layer-15-copy.png" alt="closeWindow" class="closeWindow" :class="{ show: event==='closeWindow' }">
		<img src="/character/character_0014_Layer-15.png" alt="openWindow" class="openWindow" :class="{ show: event==='openWindow' }">
		<img src="/character/character_0000_Layer-33.png" alt="sleep" class="sleep" :class="{ show: event==='sleep' && showitem('bed') }">
		<img src="/character/character_0007_Layer-3-copy-4.png" alt="sleep" class="sleep2" :class="{ show: (event==='sleep' || event==='nap') && !showitem('bed')  }">
		<img src="/character/character_0002_Layer-34.png" alt="luckyDraw" class="luckyDraw" :class="{ show: event==='luckyDraw' }">

		<div class="calendar">
			<div class="date">DATE</div>
			<div class="number">{{day}}</div>
		</div>
	</section>
</template>

<script>
	import Bed from '~/components/Item/Bed.vue'
	import Cherphang from '~/components/Item/Cherphang.vue'
	import Clock from '~/components/Item/Clock.vue'
	import Computer from '~/components/Item/Computer.vue'
	import Fidget from '~/components/Item/Fidget.vue'
	import Mama from '~/components/Item/Mama.vue'
	import Paper from '~/components/Item/Paper.vue'
	import Phone from '~/components/Item/Phone.vue'
	import Pig from '~/components/Item/Pig.vue'
	import Recorder from '~/components/Item/Recorder.vue'
	import Self from '~/components/Item/Self.vue'
	import Window from '~/components/Item/Window.vue'
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				shortRotate: 110,
				longRotate: 45
			}
		},
		components: {
			Bed,
			Cherphang,
			Computer,
			Clock,
			Fidget,
			Mama,
			Paper,
			Phone,
			Pig,
			Recorder,
			Self,
			Window
		},
		computed: {
			...mapGetters({
				event: 'getNowEvent',
				day: 'getDay',
				objects: 'getObjects',
				pause: 'getPause'
			})
		},
		methods: {
			showitem(object) {
				return this.objects.indexOf(object) !== -1 ? true : false
			}
		},
		watch: {
			pause: function() {
				let times = 1

				// console.log('this.event', this.event)
				// console.log('this.pause', this.pause)
				// if (this.event === 'start') {
				// 	this.shortRotate = 90
				// 	this.longRotate = 0
				// }

				if (this.event === 'sleep' || this.event === 'morePlay') times = 2
				if (this.event === 'overSleep') times = 3
				if (this.pause) {
					this.shortRotate += 90 * times
					this.longRotate += 90 * 12 * times
				}
			}
		}
	}
</script>

<style lang="scss">
	.objects {
		height: 100%;
		width: 100%;
		position: relative;

		.show {
			display: block !important;
		}

		.calendar {
			height: 11%;
			width: 8%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #ffffff;
			border: 3px solid #e3e3e3;
			box-shadow: -2px 2px 2px 2px rgba(0, 0, 0, 0.1);
			position: absolute;
			top: 27.6%;
			left: 34%;

			.date {
				margin-top: 5px;
			}

			.number {
				flex: 1;
				margin: 0;
				font-size: 4.5rem;
				padding: 0;
				background: transparent;
			}
		}

		.fan {
			position: absolute;
			height: 19%;
			top: 4%;
			left: 33%;
		}

		.clock {
			display: none;
			position: absolute;
			height: 17%;
			top: 25%;
			left: 18%;
		}

		.clock-tick-small {
			display: none;
			position: absolute;
			height: 14%;
			top: 26%;
			left: 19%;
			transition: 2s;
		}

		.clock-tick {
			display: none;
			position: absolute;
			height: 15%;
			top: 26.2%;
			left: 18.5%;
			transition: 2s;
		}

		.work-table {
			position: absolute;
			height: 19%;
			top: 54%;
			left: 12%;
		}

		.chair {
			position: absolute;
			height: 29%;
			top: 48.5%;
			left: 37.3%;
		}

		.Layer-33 {
			position: absolute;
			height: 24%;
			top: 30%;
			left: 54%;
		}

		.Layer-44 {
			position: absolute;
			height: 3.4%;
			top: 28.5%;
			left: 52%;
		}

		.sun {
			display: none;
			position: absolute;
			height: 12%;
			top: 32%;
			left: 56%;
		}

		.window {
			display: none;
			position: absolute;
			height: 29%;
			top: 28%;
			left: 53%;
		}

		.klui {
			display: none;
			position: absolute;
			height: 6%;
			top: 84%;
			left: 34%;
		}

		.bed {
			display: none;
			position: absolute;
			height: 27%;
			top: 65%;
			left: 0%;
		}

		.Layer-39 {
			display: none;
			position: absolute;
			height: 27%;
			top: 66%;
			left: 20%;
		}

		.bed-table {
			position: absolute;
			height: 25%;
			top: 75%;
			left: 0%;
		}

		.Layer-37 {
			display: none;
			position: absolute;
			height: 24%;
			top: 35%;
			left: 0%;
		}

		.behind-table {
			position: absolute;
			height: 13%;
			top: 68%;
			left: 68%;
		}

		.shirt {
			position: absolute;
			height: 17%;
			top: 68%;
			left: 72%;
		}

		.right-table {
			position: absolute;
			height: 30%;
			top: 54.5%;
			left: 68%;
		}

		.Layer-45 {
			position: absolute;
			height: 59%;
			top: 29%;
			right: 0%;
		}

		.Layer-46 {
			display: none;
			position: absolute;
			height: 19%;
			top: 80%;
			right: 0%;
		}

		.sock1 {
			display: none;
			position: absolute;
			height: 10%;
			top: 78%;
			left: 71%;
		}

		.sock3 {
			display: none;
			position: absolute;
			height: 5%;
			top: 86.2%;
			left: 69%;
		}

		.sock2 {
			display: none;
			position: absolute;
			height: 4%;
			top: 88%;
			left: 71%;
		}

		.fitbit {
			display: none;
			position: absolute;
			height: 5%;
			top: 74%;
			left: 59%;
		}

		.pig {
			display: none;
			position: absolute;
			height: 11%;
			top: 85%;
			left: 51%;
		}

		.coin {
			display: none;
			position: absolute;
			height: 5%;
			top: 88.5%;
			left: 46%;
		}

		.laptop {
			display: none;
			position: absolute;
			height: 14%;
			top: 47%;
			left: 30%;
		}

		.paper {
			display: none;
			position: absolute;
			height: 6.5%;
			top: 54.5%;
			left: 19%;
		}

		.pen {
			display: none;
			position: absolute;
			height: 5.5%;
			top: 55.3%;
			left: 20.6%;
		}

		.phone {
			display: none;
			position: absolute;
			height: 7%;
			top: 76.5%;
			left: 0%;
		}

		.pot-2 {
			display: none;
			position: absolute;
			height: 11.5%;
			top: 51%;
			left: 75%;
		}

		.lay {
			display: none;
			position: absolute;
			height: 11%;
			top: 53%;
			left: 80%;
		}

		.mama {
			display: none;
			position: absolute;
			height: 8%;
			top: 57%;
			left: 78%;
		}

		.Layer-47 {
			display: none;
			position: absolute;
			height: 8%;
			top: 38%;
			left: 74%;
		}

		.Layer-49 {
			display: none;
			position: absolute;
			height: 19%;
			top: 23%;
			left: 81%;
		}

		.Layer-48 {
			display: none;
			position: absolute;
			height: 19%;
			top: 24.5%;
			left: 83.6%;
		}

		// CHARACTER //

		.meditate {
			display: none;
			position: absolute;
			height: 29%;
			top: 48%;
			left: 10%;
		}

		.eat {
			display: none;
			position: absolute;
			height: 31%;
			top: 39%;
			left: 11%;
		}

		.play {
			display: none;
			position: absolute;
			height: 35%;
			top: 45%;
			left: 34.3%;
		}

		.play2 {
			display: none;
			position: absolute;
			height: 41%;
			top: 39%;
			left: 31%;
		}

		.play3 {
			display: none;
			position: absolute;
			height: 41%;
			top: 40%;
			left: 34.4%;
		}

		.eatingfail {
			display: none;
			position: absolute;
			height: 46%;
			top: 45%;
			left: 59%;
		}

		.luckyDraw {
			display: none;
			position: absolute;
			height: 39%;
			top: 47%;
			left: 53%;
		}

		.cherprang {
			display: none;
			position: absolute;
			height: 47%;
			top: 44%;
			left: 42%;
		}

		.nap {
			display: none;
			position: absolute;
			height: 31%;
			top: 58%;
			left: 24%;
		}

		.sleep {
			display: none;
			position: absolute;
			height: 32%;
			top: 59%;
			left: 4%;
		}

		.sleep2 {
			display: none;
			position: absolute;
			height: 15%;
			top: 70%;
			left: 13%;
		}

		.sunburn {
			display: none;
			position: absolute;
			height: 18%;
			top: 58%;
			left: 46%;
		}

		.sunburn2 {
			display: none;
			position: absolute;
			height: 15%;
			top: 60%;
			left: 48%;
		}

		.closeWindow {
			display: none;
			position: absolute;
			height: 39%;
			top: 32%;
			left: 53%;
		}

		.openWindow {
			display: none;
			position: absolute;
			height: 39%;
			top: 32%;
			left: 53%;
		}

		// MAPPING

		$menu-height: 40;
		$menu-width: 200;

		.item {
			position: absolute;
			cursor: pointer;

			.openMenu {
				height: 100%;
				width: 100%;
				display: inline-block;
			}

			.menu {
				visibility: hidden;
				opacity: 0;
				transition: 0.2s ease-in;

				ul {
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: -20%;

					li {
						height: $menu-height + px;
						width: $menu-width + px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 5px;
						background: #ffffff;
						color: #000000;
						border: 2px solid #000000;
						border-radius: 50px;
						transition: 0.1s;
						z-index: 20;
					}

					li:hover {
						height: ($menu-height * 1.05) + px;
						width: ($menu-width * 1.05) + px;
						font-size: 1.05rem;
					}

					li:active {
						height: $menu-height + px;
						width: $menu-width + px;
					}
				}
			}

			.open {
				visibility: visible;
				opacity: 1;
			}
		}
	}
</style>
