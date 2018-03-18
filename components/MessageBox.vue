<template>
	<div class="message-box">
		<img src="/event/event_aunty.png" alt="aunty" :class="{ show: event==='aunty' }">
		<img src="/event/event_aunty2.png" alt="aunty2" :class="{ show: event==='bodyguard' }">
		<img src="/event/event_gameover_depress.png" alt="depress" :class="{ show: event==='loseHappiness' }">
		<img src="/event/event_hospital.png" alt="hospital" :class="{ show: event==='loseEnergy' || event==='loseFullness' }">
		<div class="text">{{ message }}</div>
		<div class="money" :class="{ show: event==='fixCost' || event==='tax'}">
			<img src="/event/event_recipt.png" alt="event_recipt" :class="{ show: event==='fixCost' }">
			<img src="/event/event_tax.png" alt="event_recipt" :class="{ show: event==='tax' }">
			<div class="cost">{{fixcost}} THB</div>
		</div>
		<div class="button" @click="close">okay...</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				message: ''
			}
		},
		props: ['event'],
		methods: {
			...mapActions({
				setStart: 'setStart',
				removeEvent: 'removeEvent'
			}),
			close() {
				const audio = new Audio('sound/click.mp3')
				audio.play()

				if (
					this.event === 'loseHappiness' ||
					this.event === 'loseEnergy' ||
					this.event === 'loseFullness' ||
					this.event === 'endgame'
				) {
					this.removeEvent(this.event)
					setTimeout(() => {
						this.setStart()
					}, 1000)
				} else {
					this.removeEvent(this.event)
				}
			}
		},
		computed: {
			...mapGetters({
				fixcost: 'getFixcost'
			})
		},
		mounted() {
			console.log(this.event)

			if (this.event === 'somethingElse') {
				this.message = 'You just wanna do something else'
			} else if (this.event === 'enlighten') {
				this.message = 'You enlighten by meditating'
			} else if (this.event === 'sunburn') {
				this.message = 'You got sun burnt.'
			} else if (this.event === 'overSleep') {
				this.message = 'You had an over slept.'
			} else if (this.event === 'sleep') {
				this.message = 'You just wanna take some nap but fall as sleep.'
			} else if (this.event === 'dropMama') {
				this.message = 'You droped your instant noodle.'
			} else if (this.event === 'luckyDraw') {
				this.message = 'You got a lucky draw on instant noodle'
			} else if (this.event === 'play') {
				this.message = 'You was slacking off'
			} else if (this.event === 'error') {
				this.message =
					'Your computer need rest. You pay 100THB for fix your blue screen.'
			} else if (this.event === 'morePlay') {
				this.message = "You can't stop playing"
			} else if (this.event === 'argue') {
				this.message = 'Your girlfriend made an argue without a clue'
			} else if (this.event === 'smell') {
				this.message = 'It smell like a rot orange'
			} else if (this.event === 'hitYourself') {
				this.message = 'You hit yourself'
			} else if (this.event === 'fixCost') {
				this.message = "Here's you need to pay"
			} else if (this.event === 'day2') {
				this.message = "You seems don't want to wake up now."
			} else if (this.event === 'tax') {
				this.message =
					'It seems the gov want to buy watches. so they rise the taxes'
			} else if (this.event === 'day31') {
				this.message =
					'It seems the gov want your room. so they give you a hi five and take your room'
			} else if (this.event === 'lessEnergy') {
				this.message = 'You just really wanna sleep'
			} else if (this.event === 'loseEnergy') {
				this.message = "You can't endure this life anymore"
			} else if (this.event === 'lessFullness') {
				this.message = "You can't resist the smell of instant noodle"
			} else if (this.event === 'loseFullness') {
				this.message = 'You have a stomachache'
			} else if (this.event === 'lessHappiness') {
				this.message = 'A game has call you to play'
			} else if (this.event === 'loseHappiness') {
				this.message = 'You have a depression'
			} else if (this.event === 'bodyguard') {
				this.message = 'Here come a big guy'
			} else if (this.event === 'gameover') {
			} else if (this.event === 'start') {
				this.message = "Let's start a new day"
			}
		}
	}
</script>

<style lang="scss">
	.message-box {
		width: 50%;
		display: flex;
		flex-direction: column;
		position: absolute;
		background: #ffffff;
		padding: 25px 50px;
		border: 2px solid #000000;
		border-radius: 20px;

		img {
			display: none;
		}

		.money {
			display: none;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.cost {
				font-weight: 600;
			}
		}

		.show {
			display: flex !important;
		}

		.button {
			width: fit-content;
			margin: 20px auto 0;
			padding: 0 50px;
			border: 2px solid #000000;
			border-radius: 20px;
			font-size: 1.2rem;
			transition: 0.1s;
		}

		.button:hover {
			background: #eaeaea;
		}
	}
</style>
