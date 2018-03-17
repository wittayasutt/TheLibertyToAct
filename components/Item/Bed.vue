<template>
	<div class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionSleep">Sleep</li>
				<li @click="actionNap">Nap</li>
				<li @click="actionSell">Sell</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { ramdomEvent, sleep, overSleep, nap } from '../../events'
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
			actionSleep() {
				const random = Math.random()

				if (random <= 0.05) {
					ramdomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent
					)
				} else if (random <= 0.95) {
					sleep(this.increasePeriod, this.improveStatus, this.setEvent)
				} else {
					overSleep(this.increasePeriod, this.improveStatus, this.setEvent)
				}
			},
			actionNap() {
				const random = Math.random()

				if (random <= 0.05) {
					ramdomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent
					)
				} else if (random <= 0.8) {
					nap(this.increasePeriod, this.improveStatus, this.setEvent)
				} else {
					sleep(this.increasePeriod, this.improveStatus, this.setEvent)
				}
			},
			actionSell() {
				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 1000
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
		height: 26%;
		width: 42%;
		top: 60%;
		left: 4%;
		z-index: 11;
		// background: red;
		// opacity: 0.5;
	}
</style>
