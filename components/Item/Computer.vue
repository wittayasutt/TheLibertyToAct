<template>
	<div v-if="hasIt('computer')" class="item" @click="toggle" v-click-outside="hide">
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
	import { randomEvent, work, play, error, morePlay } from '../../events'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				open: false
			}
		},
		computed: {
			...mapGetters({
				objects: 'getObjects'
			})
		},
		methods: {
			...mapActions({
				increasePeriod: 'increasePeriod',
				improveStatus: 'improveStatus',
				setEvent: 'setEvent',
				addEvent: 'addEvent',
				setPause: 'setPause',
				removeObject: 'removeObject'
			}),
			toggle() {
				const audio = new Audio('sound/click.mp3')
				audio.play()
				this.open = !this.open
			},
			hide() {
				this.open = false
			},
			hasIt(object) {
				return this.objects.indexOf(object) !== -1 ? true : false
			},
			actionWork() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				const random = Math.random()
				if (random <= 0.05) {
					randomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent,
						this.setPause
					)
				} else if (random <= 0.85) {
					work(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else if (random <= 0.95) {
					play(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('play')
				} else {
					error(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('error')
				}
			},
			actionPlay() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				const random = Math.random()
				if (random <= 0.05) {
					randomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent,
						this.setPause
					)
				} else if (random <= 0.8) {
					play(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else {
					morePlay(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				}
			},
			actionSell() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 500
				})

				this.removeObject('computer')
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
		width: 16%;
		top: 49%;
		left: 33%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
