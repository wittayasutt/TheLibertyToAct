<template>
	<div class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionEat">Eat</li>
				<li @click="actionSell">Sell</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { ramdomEvent, eat, dropMama, luckyDraw } from '../../events'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				open: false
			}
		},
		methods: {
			...mapActions({
				increasePeriod: 'increasePeriod',
				improveStatus: 'improveStatus',
				setEvent: 'setEvent',
				addEvent: 'addEvent'
			}),
			toggle() {
				this.open = !this.open
			},
			hide() {
				this.open = false
			},
			actionEat() {
				const random = Math.random()

				if (random <= 0.05) {
					ramdomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent
					)
				} else if (random <= 0.85) {
					eat(this.increasePeriod, this.improveStatus, this.setEvent)
				} else if (random <= 0.95) {
					dropMama(this.increasePeriod, this.improveStatus, this.setEvent)
				} else {
					luckyDraw(this.increasePeriod, this.improveStatus, this.setEvent)
				}
			},
			actionSell() {
				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 10
				})
			}
		},
		directives: {
			ClickOutside
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		height: 14%;
		width: 11%;
		top: 45%;
		right: 14%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
