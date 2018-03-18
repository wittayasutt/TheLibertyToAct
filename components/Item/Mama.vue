<template>
	<div v-if="hasIt('mama') || hasIt('lay') || hasIt('pot') " class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li v-if="hasIt('mama')" @click="actionEat">Eat</li>
				<li v-if="hasIt('mama')" @click="actionSellMama">Sell Mama</li>
				<li v-if="hasIt('lay')" @click="actionSellLay">Sell Lay</li>
				<li v-if="hasIt('pot')" @click="actionSellPot">Sell Pot</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { randomEvent, eat, dropMama, luckyDraw } from '../../events'
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
			actionEat() {
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
				} else if (random <= 0.895) {
					eat(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
				} else if (random <= 0.995) {
					dropMama(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('dropMama')
				} else {
					luckyDraw(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.setPause
					)
					this.addEvent('luckyDraw')
				}
			},
			actionSellMama() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 10
				})

				this.removeObject('mama')
			},
			actionSellLay() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 5
				})

				this.removeObject('lay')
			},
			actionSellPot() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: 0,
					money: 20
				})

				this.removeObject('pot')
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
		width: 17%;
		top: 53%;
		right: 12%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
