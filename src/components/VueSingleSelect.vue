<template>
	<select @change="checkAmount" class="selectpicker" v-model="selected">
		<option value="5">5</option>
		<option value="10">10</option>
		<option value="15">15</option>
	</select>
</template>

<script>

	export default {
		name: 'Select',
		data: () => ({
			selected: 5
		}),
		methods: {
			checkAmount: () => {
				this.$emit('myCallback')
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
