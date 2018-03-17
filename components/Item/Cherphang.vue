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
	import { ramdomEvent, lookAtCherprang } from '../../events'
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
			actionLookAt() {
				const random = Math.random()

				if (random <= 0.05) {
					ramdomEvent(
						this.increasePeriod,
						this.improveStatus,
						this.setEvent,
						this.addEvent
					)
				} else {
					lookAtCherprang(this.increasePeriod, this.improveStatus, this.setEvent)
				}
			},
			actionSell() {
				this.improveStatus({
					energy: 0,
					fullness: 0,
					happiness: -95,
					money: 600000
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
		width: 10%;
		top: 33%;
		left: 4%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
