<template>
	<section class="character">
		<img src="/character/eating fail.png" alt="eating fail" class="eatingfail" :class="{ show: event==='dropMama' }">
		<img src="/character/looking at cherprang.png" alt="looking at cherprang" class="cherprang" :class="{ show: event==='lookAtCherprang' }">
		<img src="/character/nap.png" alt="nap" class="nap" :class="{ show: event==='nap' }">
		<img src="/character/sleep.png" alt="sleep" class="sleep" :class="{ show: event==='sleep' }">
		<!-- <img src="/character/smell sock.png" alt="smell sock" class="smellsock"> -->
		<img src="/character/sun burn.png" alt="sun burn" class="sunburn" :class="{ show: event==='burn' }">
		<img src="/character/sun burn2.png" alt="sun burn2" class="sunburn2" :class="{ show: event==='burn2' }">
		<img src="/character/working error.png" alt="working error" class="workingerror" :class="{ show: event==='error' || event==='play' }">
		<img src="/character/working scene.png" alt="working scene" class="workingscene" :class="{ show: event==='play' }">
	</section>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				event: 'getNowEvent'
			})
		}
	}
</script>

<style lang="scss">
	.character {
		height: 100%;
		widows: 100%;
		position: relative;

		img {
			display: none;
		}

		.show {
			display: block;
		}

		.eatingfail {
			position: absolute;
			height: 43.3%;
			top: 42%;
			left: 54%;
		}

		.cherprang {
			position: absolute;
			height: 39%;
			top: 44%;
			left: 53%;
		}

		.nap {
			position: absolute;
			height: 24%;
			top: 58%;
			left: 25%;
		}

		.sleep {
			position: absolute;
			height: 30%;
			top: 57%;
			left: 8%;
		}

		.smellsock {
			position: absolute;
			height: 34%;
			top: 56%;
			left: 54%;
		}

		.sunburn {
			position: absolute;
			height: 13%;
			top: 55%;
			left: 54%;
		}

		.sunburn2 {
			position: absolute;
			height: 15%;
			top: 60%;
			left: 48%;
		}

		.workingerror {
			position: absolute;
			height: 37%;
			top: 37.5%;
			left: 32.4%;
		}

		.workingscene {
			position: absolute;
			height: 10.3%;
			top: 42.5%;
			left: 33.7%;
		}
	}
</style>
