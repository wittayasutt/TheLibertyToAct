<template>
	<div class="item" @click="toggle" v-click-outside="hide">
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
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 28%;
		left: 25%;
		cursor: pointer;

		.menu {
			display: none;
			min-width: 160px;
			color: #ffffff;
			padding: 0;
			z-index: 1;

			ul {
				height: 100%;
				width: 100%;
				padding: 5px 0;
				background: rgba($grey, 0.9);
				box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

				li {
					padding: 5px 10px;
					transition: 0.2s;
				}

				li:hover {
					background: rgba($grey, 1);
				}
			}
		}

		.open {
			display: flex !important;
		}
	}
</style>
