<template>
	<div>
		<select @change="checkValue" class="selectpicker" v-model="limitationList">
			<option value="4">5</option>
			<option value="9">10</option>
			<option value="14">15</option>
		</select>
	</div>
</template>

<script>

	export default {
		name: 'Select',
		data: () => ({
			sign: 101,
			limitationList: 4
		}),

		methods: {
			checkValue ()  {
				this.$emit('checkValue', {
					limitationList: this.limitationList
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
