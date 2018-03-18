<template>
	<div v-if="hasIt('self')" class="item" @click="toggle" v-click-outside="hide">
		<div class="openMenu"></div>
		<div class="menu" :class="{ open }">
			<ul>
				<li @click="actionSell">Sell</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'
	import { randomEvent, lookAtCherprang } from '../../events'
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
			actionSell() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: -50,
					money: 500
				})

				this.removeObject('self')
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
		top: 24%;
		left: 77%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
