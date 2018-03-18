<template>
	<section class="status">
		<div class="wrapper">
			<div class="arrowWrapper">
				<!-- <div class="arrow"> -->
				<!-- <i class="fa fa-caret-right"></i> -->
				<!-- </div> -->
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
				<!-- <div class="arrow"> -->
				<!-- <i class="fa fa-caret-right"></i> -->
				<!-- </div> -->
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
				<!-- <div class="arrow"> -->
				<!-- <i class="fa fa-caret-right"></i> -->
				<!-- </div> -->
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
	import { sleep, eat, play } from '../events'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				displayMoney: 500
			}
		},
		methods: {
			...mapActions({
				increasePeriod: 'increasePeriod',
				improveStatus: 'improveStatus',
				improveMoney: 'improveMoney',
				changeFixcost: 'changeFixcost',
				increaseLowEnergyDays: 'increaseLowEnergyDays',
				increaseLowFullnessDays: 'increaseLowFullnessDays',
				increaseLowHappinessDays: 'increaseLowHappinessDays',
				increaseLowMoneyDays: 'increaseLowMoneyDays',
				setEvent: 'setEvent',
				addEvent: 'addEvent',
				setPause: 'setPause'
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
						sleep(
							this.increasePeriod,
							this.improveStatus,
							this.setEvent,
							this.setPause
						)
						this.addEvent('day2')
						this.improveMoney(-this.fixcost)
						this.addEvent('fixCost')
					} else if (this.day === 7) {
						this.changeFixcost(-200)
						this.addEvent('tax')
						this.improveMoney(-200)
						this.addEvent('fixCost')
					} else if (this.day === 14) {
						this.changeFixcost(-250)
						this.addEvent('tax')
						this.improveMoney(-250)
						this.addEvent('fixCost')
					} else if (this.day === 21) {
						this.changeFixcost(-330)
						this.addEvent('tax')
						this.improveMoney(-330)
						this.addEvent('fixCost')
					} else if (this.day === 31) {
						this.addEvent('gameover')
					} else {
						this.improveMoney(-this.fixcost)
						this.addEvent('fixCost')
					}
				}
			},
			period: function() {
				if (this.lowEnergyDays > 1) {
					this.addEvent('loseEnergy')
				}
				if (this.lowFullnessDays > 1) {
					this.addEvent('loseFullness')
				}
				if (this.lowHappinessDays > 1) {
					this.addEvent('loseHappiness')
				}
				if (this.lowMoneyDays > 2) {
					this.addEvent('bodyguard')
					this.improveStatus({
						energy: -20,
						fullness: 0,
						happiness: -20,
						money: 0
					})
				}

				if (this.status.energy < 20) {
					const random = Math.random()
					if (random <= 0.35) {
						sleep(
							this.increasePeriod,
							this.improveStatus,
							this.setEvent,
							this.setPause
						)
						this.addEvent('lessEnergy')
					}
					this.increaseLowEnergyDays(1)
				} else {
					this.increaseLowEnergyDays()
				}

				if (this.status.fullness < 20) {
					const random = Math.random()
					if (random <= 0.35) {
						eat(
							this.increasePeriod,
							this.improveStatus,
							this.setEvent,
							this.setPause
						)
						this.addEvent('lessFullness')
					}
					this.increaseLowFullnessDays(1)
				} else {
					this.increaseLowFullnessDays()
				}

				if (this.status.happiness < 20) {
					const random = Math.random()
					if (random <= 0.35) {
						play(
							this.increasePeriod,
							this.improveStatus,
							this.setEvent,
							this.setPause
						)
						this.addEvent('lessHappiness')
					}
					this.increaseLowHappinessDays(1)
				} else {
					this.increaseLowHappinessDays()
				}

				if (this.status.money < 0) {
					this.addEvent('aunty')
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
		z-index: 30;

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
