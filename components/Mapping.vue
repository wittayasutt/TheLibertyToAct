<template>
	<section class="mapping">
		<bed />
		<cherphang />
		<computer />
		<clock />
		<mama />
		<window />
	</section>
</template>

<script>
	import Bed from '~/components/Item/Bed.vue'
	import Cherphang from '~/components/Item/Cherphang.vue'
	import Clock from '~/components/Item/Clock.vue'
	import Computer from '~/components/Item/Computer.vue'
	import Mama from '~/components/Item/Mama.vue'
	import Window from '~/components/Item/Window.vue'

	export default {
		components: {
			Bed,
			Cherphang,
			Computer,
			Clock,
			Mama,
			Window
		}
	}
</script>

<style lang="scss">
	$menu-height: 40;
	$menu-width: 200;

	.mapping {
		height: 100%;
		widows: 100%;

		.item {
			position: absolute;
			cursor: pointer;

			.openMenu {
				height: 100%;
				width: 100%;
				display: inline-block;
			}

			.menu {
				visibility: hidden;
				opacity: 0;
				transition: 0.2s ease-in;

				ul {
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: -20%;

					li {
						height: $menu-height + px;
						width: $menu-width + px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 5px;
						background: #ffffff;
						color: #000000;
						border: 2px solid #000000;
						border-radius: 50px;
						transition: 0.1s;
						z-index: 99;
					}

					li:hover {
						height: ($menu-height * 1.05) + px;
						width: ($menu-width * 1.05) + px;
						font-size: 1.05rem;
					}

					li:active {
						height: $menu-height + px;
						width: $menu-width + px;
					}
				}
			}

			.open {
				visibility: visible;
				opacity: 1;
			}
		}
	}
</style>
