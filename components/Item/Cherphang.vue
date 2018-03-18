<template>
	<div class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionLookAt">LookAt</li>
				<li @click="actionSell">Sell</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { randomEvent, lookAtCherprang } from '../../events'
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
			actionLookAt() {
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
				} else {
					lookAtCherprang(
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

				this.addEvent('loseHappiness')
				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: -95,
					money: 600000
				})

				this.removeObject('cherphang')
			}
		},
		directives: {
			ClickOutside
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		height: 19%;
		width: 9%;
		top: 38%;
		left: 2%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
