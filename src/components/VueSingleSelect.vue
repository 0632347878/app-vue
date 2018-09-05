<template>
	<div>
		<input class="selectpicker" v-model="value">
		<button @click="checkValue">press</button>
	</div>

</template>

<script>

	export default {
		name: 'Select',
		data: () => ({
			value: '',
			sign: 101
		}),
		methods: {
			checkValue ()  {
				this.$emit('checkValue', {
					value: this.value,
					sign: this.sign
				})
			}
		},
		props: {

		},
		mounted() {
		//			this.checkAmount()
		}
	}
</script>

<style scoped>
	.one {
		display: inline-block;
	}
	.selectpicker {
		width: 100px;
		height: 40px;
		background: no-repeat;
		padding: 10px;
	}
</style>
