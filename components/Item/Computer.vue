<template>
	<div class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionWork">Work</li>
				<li @click="actionPlay">Play</li>
				<li @click="actionSell">Sell</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { ramdomEvent, work, play, error, morePlay } from '../../events'
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
			actionWork() {
				const random = Math.random()

				if (random <= 0.05) {
					ramdomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent
					)
				} else if (random <= 0.85) {
					work(this.increasePeriod, this.improveStatus, this.setEvent)
				} else if (random <= 0.95) {
					play(this.increasePeriod, this.improveStatus, this.setEvent)
				} else {
					error(this.increasePeriod, this.improveStatus, this.setEvent)
				}
			},
			actionPlay() {
				const random = Math.random()

				if (random <= 0.05) {
					ramdomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent
					)
				} else if (random <= 0.8) {
					play(this.increasePeriod, this.improveStatus, this.setEvent)
				} else {
					morePlay(this.increasePeriod, this.improveStatus, this.setEvent)
				}
			},
			actionSell() {
				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 500
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
		height: 22%;
		width: 32%;
		top: 43%;
		left: 22%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
