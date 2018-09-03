<template>
    <div>
        <button class="btn btn-success" @click="login" v-model="add">User add</button>
        <input type="text" v-model="email">
    </div>
</template>

<script>
    const addUser = {
        id: '',
        firstName: "",
        lastName: "",
        email: "",
        isActive: "",
        balance: "",
        phone: "",
        registered: "",
        registeredDate: "",
        picture: "//images.igdb.com/igdb/image/upload/t_thumb/z5t0yuhyiiui1ickwhgj.png",
        true: ""
    };

    export default {
        data () {
            return {
                add: '',
                email: ''
            }
        },
        name: 'UserAdd',
        methods: {
            login () {
                this.$emit('login', {
                    add: this.add.value,
                    email: this.email
                })
            }
        }
    }

</script>