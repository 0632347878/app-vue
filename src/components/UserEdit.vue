<template>
	<div class="user-wrapper">
		<h3>- USER {{ id }} -</h3>
		<div class="panel panel-primary">
			<div class="panel-heading">
				<!--<span>{{ id }}</span>-->
				<div class="">
					<router-link :disabled="id <= 1 "
											 class="btn btn-success"
											 tag="button"
											 :to="'/employees/' + (parseInt(id, 10) - 1 )">-1 user
					</router-link>
					<router-link :disabled="id >= 5"
											 class="btn btn-success"
											 tag="button"
											 :to="'/employees/' + (parseInt(id, 10) + 1 )">+1 user
					</router-link>
					<user-add @login="add">

					</user-add>
				</div>

			</div>
		</div>
		<div class="panel-body">
			<user-form v-model="employee"></user-form>
			<button class="btn btn-success" @click="save">Сохранить изменения</button>
			<button class="btn btn-danger" @click="remove">Удалить пользователя</button>
		</div>
	</div>
</template>

<script>
	import UserForm from './UserF.vue';
	import UserAdd from './UserAdd.vue';
	import axios from 'axios';

	export default {
		name: 'list',
		data () {
			return {
				url: 'http://localhost:3000/employees/',
				employee: Object,
//      startValue: 55,
//			interval: null
			}
		},
		props: {
			id: String
		},
		components: {
			UserForm,
			UserAdd
		},
		computed: {
			userUrl () {
				return `${this.url}${this.id}`
			}
		},
		watch: {
			$route: 'loadData'
		},
		methods: {
			startCounter() {
				let element = document.querySelector('.numbers');
				if (element != null) {
					if (element.innerHTML > 0) {
						return element.innerHTML = element.innerHTML - 1;
					}
				}
			},
			loadData() {
				var _self = this;
				fetch(_self.userUrl)
					.then(function (response) {
						response.json().then(function (data) {
							_self.employee = data;
						});
					})
			},
			save() {
				var _self = this;
				//actual user obj _self.employee
				axios.patch(_self.userUrl, _self.employee)
					.then(() => {
					this.$router.push({path: '/list'})
					})
			},
			remove() {
				var _self = this;
				//actual user obj _self.employee
				axios.delete(`${this.url}${this.id}`)
					.then(() => {
					this.$router.push({path: '/list'})
			})
			},
			add(data) {
//				console.log('child component said login', data)
				var _self = this;
				//actual user obj _self.employee
				axios.post(_self.url, data.newUser)
					.then(() => {
					this.$router.push({path: '/list'})
			})
			}
		},
		mounted () {
			this.loadData();
			this.interval = setInterval(this.startCounter, 1000);
		},
		destroyed () {
			clearInterval(this.interval);
		},
		beforeRouteUpdate (to, from, next) {
			this.loadData();
			next()
		}
	}
</script>
<style scope>
	.user-wrapper {
		margin-top: 30px;
	}

	.element {
		height: 80px;

	}

	.numbers {
		font-variant-numeric: tabular-nums;
		font-feature-settings: "tnum";
		font-size: 26px;
	}

	.element span {
		border-radius: 10px;
		border: 1px solid transparent;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		display: inline-block;
		padding: 15px;
		background: rgba(0, 0, 0, .3);
	}
	.panel-heading > div {
		display: flex;
		justify-content: center;
	}
	.panel-heading button {
		margin: 10px;
	}
</style>