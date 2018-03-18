<template>
	<div class="message" :class="{ open }">
		<message-box v-for="(event, index) in events" :key="index" :event="event" />
	</div>
</template>

<script>
	import MessageBox from '~/components/MessageBox.vue'
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				open: true
			}
		},
		components: {
			MessageBox
		},
		computed: {
			...mapGetters({
				events: 'getEvents'
			})
		},
		watch: {
			events: function() {
				this.open = this.events.length !== 0 ? true : false
			}
		}
	}
</script>

<style lang="scss">
	.message {
		height: 100%;
		width: 100%;
		display: none;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.15);
		z-index: 40;
	}

	.open {
		display: flex !important;
	}
</style>
