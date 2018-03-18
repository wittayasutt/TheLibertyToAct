<template>
	<div v-if="hasIt('window')" class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionOpen">Open</li>
				<li @click="actionClose">Close</li>
				<li v-if="hasIt('window')" @click="actionSellWindow">Sell Window</li>
				<li v-if="hasIt('sun')" @click="actionSellSun">Sell Sun</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { randomEvent, openWindow, closeWindow, sunburn } from '../../events'
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
			actionOpen() {
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
					openWindow(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else {
					sunburn(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('sunburn')
				}
			},
			actionClose() {
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
					closeWindow(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else {
					sunburn(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('sunburn')
				}
			},
			actionSellWindow() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 100
				})

				this.removeObject('window')
			},
			actionSellSun() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 5
				})

				this.removeObject('sun')
			}
		},
		directives: {
			ClickOutside
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		height: 25%;
		width: 16%;
		top: 29%;
		right: 30%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
