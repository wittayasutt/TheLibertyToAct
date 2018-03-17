<template>
	<div class="item" @click="toggle" v-click-outside="hide">
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

	export default {
		data() {
			return {
				open: false
			}
		},
		methods: {
			toggle() {
				this.open = !this.open
			},
			hide() {
				this.open = false
			},
			actionSell() {
				console.log('sell')
			}
		},
		directives: {
			ClickOutside
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		height: 11%;
		width: 10%;
		top: 28%;
		left: 25%;
		z-index: 10;
		// background: red;
		// opacity: 0.5;
	}
</style>
