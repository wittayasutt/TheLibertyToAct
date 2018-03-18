<template>
	<div class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionSleep">Sleep</li>
				<li @click="actionNap">Nap</li>
				<li v-if="hasIt('bed')" @click="actionSell">Sell</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { randomEvent, sleep, overSleep, nap } from '../../events'
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
			actionSleep() {
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
				} else if (random <= 0.95) {
					sleep(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else {
					overSleep(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('overSleep')
				}
			},
			actionNap() {
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
					nap(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else {
					sleep(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('sleep')
				}
			},
			actionSell() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 1000
				})

				this.removeObject('bed')
			}
		},
		directives: {
			ClickOutside
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		height: 18%;
		width: 29%;
		top: 69%;
		left: 9%;
		z-index: 11;
		// background: red;
		// opacity: 0.5;
	}
</style>
