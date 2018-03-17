<template>
	<section class="status">
		<div class="wrapper">
			<div class="text">Energy</div>
			<div class="border">
				<div class="energy" :style="{ width: getStatus.energy + '%' }"></div>
			</div>
		</div>
		<div class="wrapper">
			<div class="text">Fullness</div>
			<div class="border">
				<div class="fullness" :style="{ width: getStatus.fullness + '%' }"></div>
			</div>
		</div>
		<div class="wrapper">
			<div class="text">Happiness</div>
			<div class="border">
				<div class="happiness" :style="{ width: getStatus.happiness + '%' }"></div>
			</div>
		</div>
		<div class="wrapper">
			<div class="text">Money</div>
			<div class="money">${{getStatus.money}}</div>
		</div>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {}
		},
		computed: {
			...mapGetters({
				getStatus: 'getStatus',
				getPrevStatus: 'getPrevStatus'
			})
		}
	}
</script>

<style lang="scss" scoped>
	.status {
		height: 10%;
		width: 25%;
		position: absolute;
		top: 2%;
		right: 2%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		z-index: 100;

		.wrapper {
			height: 20%;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;

			.text {
				height: 100%;
			}

			.border {
				height: 100%;
				width: 70%;
				margin-left: 2%;
				border: 1px solid #000000;
			}

			.money {
				height: 100%;
				width: 70%;
				margin-left: 2%;
			}
		}

		.energy,
		.fullness,
		.happiness {
			height: 100%;
			background: $green;
		}
	}
</style>
