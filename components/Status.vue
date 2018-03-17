<template>
	<section class="status">
		<div class="wrapper">
			<div class="arrowWrapper">
				<div class="arrow">
					<i class="fa fa-caret-right"></i>
				</div>
			</div>
			<div class="borderWrapper">
				<div class="text">Energy</div>
				<div class="border">
					<div class="happiness" :style="{ width: status.energy + '%' }"></div>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<div class="arrowWrapper">
				<div class="arrow">
					<i class="fa fa-caret-right"></i>
				</div>
			</div>
			<div class="borderWrapper">
				<div class="text">Fullness</div>
				<div class="border">
					<div class="happiness" :style="{ width: status.fullness + '%' }"></div>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<div class="arrowWrapper">
				<div class="arrow">
					<i class="fa fa-caret-right"></i>
				</div>
			</div>
			<div class="borderWrapper">
				<div class="text">Happiness</div>
				<div class="border">
					<div class="happiness" :style="{ width: status.happiness + '%' }"></div>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<div class="top"></div>
			<div class="bottom">
				<div class="text">Money:</div>
				<div class="money">
					${{displayMoney}}</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				displayMoney: 500
			}
		},
		methods: {
			...mapActions({
				improveStatus: 'improveStatus',
				improveMoney: 'improveMoney',
				changeFixcost: 'changeFixcost',
				increaseLowEnergyDays: 'increaseLowEnergyDays',
				increaseLowFullnessDays: 'increaseLowFullnessDays',
				increaseLowHappinessDays: 'increaseLowHappinessDays',
				increaseLowMoneyDays: 'increaseLowMoneyDays'
			})
		},
		computed: {
			...mapGetters({
				day: 'getDay',
				newDay: 'getNewDay',
				period: 'getPeriod',
				status: 'getStatus',
				prevStatus: 'getPrevStatus',
				fixcost: 'getFixcost',
				lowEnergyDays: 'getLowEnergyDays',
				lowFullnessDays: 'getLowFullnessDays',
				lowHappinessDays: 'getLowHappinessDays',
				lowMoneyDays: 'getLowMoneyDays'
			})
		},
		watch: {
			day: function() {
				if (this.newDay) {
					if (this.day === 2) {
						console.log('sleep')
						this.improveMoney(this.fixcost)
					} else if (this.day === 7) {
						this.changeFixcost(200)
						this.improveMoney(200)
					} else if (this.day === 14) {
						this.changeFixcost(250)
						this.improveMoney(250)
					} else if (this.day === 21) {
						this.changeFixcost(330)
						this.improveMoney(330)
					} else if (this.day === 31) {
						console.log('end game')
					} else {
						this.improveMoney(this.fixcost)
					}
				}
			},
			period: function() {
				if (this.lowEnergyDays > 2) {
					console.log('end game')
				}
				if (this.lowFullnessDays > 2) {
					console.log('end game')
				}
				if (this.lowHappinessDays > 2) {
					console.log('end game')
				}
				if (this.lowMoneyDays > 3) {
					console.log('...')
				}

				if (this.status.energy < 20) {
					console.log('sleep')
					this.increaseLowEnergyDays(1)
				} else {
					this.increaseLowEnergyDays()
				}

				if (this.status.fullness < 20) {
					console.log('eat')
					this.increaseLowFullnessDays(1)
				} else {
					this.increaseLowFullnessDays()
				}

				if (this.status.happiness < 20) {
					console.log('play')
					this.increaseLowHappinessDays(1)
				} else {
					this.increaseLowHappinessDays()
				}

				if (this.status.money < 0) {
					console.log('...')
					this.increaseLowMoneyDays(1)
				} else if (this.status.money < 100) {
					this.increaseLowMoneyDays(1)
				} else {
					this.increaseLowMoneyDays()
				}
			},
			status: function() {},
			'status.money': function() {
				clearInterval(this.interval)
				if (this.status.money == this.displayMoney) {
					return
				}

				this.interval = window.setInterval(
					function() {
						if (this.status.money != this.displayMoney) {
							let change = (this.status.money - this.displayMoney) / 10
							change = change >= 0 ? Math.ceil(change) : Math.floor(change)
							this.displayMoney = this.displayMoney + change
						}
					}.bind(this),
					20
				)
			}
		}
	}
</script>

<style lang="scss" scoped>
	$bar-width: 70%;

	.status {
		height: 4%;
		width: 100%;
		position: absolute;
		top: 1%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 8%;
		z-index: 100;

		.wrapper {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			margin: 0 1%;

			.arrowWrapper {
				width: 100%;
				display: flex;
				justify-content: flex-end;

				.arrow {
					width: $bar-width;
					text-align: center;

					i {
						font-size: 1.5rem;
					}
				}
			}

			.borderWrapper {
				height: 40%;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.text {
					height: 100%;
					display: flex;
					align-items: center;
				}

				.border {
					height: 100%;
					width: $bar-width;
					margin-left: 2%;
					border: 2px solid #000000;
				}

				.energy,
				.fullness,
				.happiness {
					height: 100%;
					background: #00aa9d;
					transition: 0.2s;
				}
			}

			.top {
				flex: 1;
			}

			.bottom {
				display: flex;
				flex-direction: row;

				.text,
				.money {
					height: 100%;
					align-items: center;
				}
			}
		}
	}
</style>
