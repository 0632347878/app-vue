<template>
    <div ref="item">
        <h1>Page part</h1>
        <router-link tag="a" to="/">Router link another</router-link><br/><br/>
        <router-link tag="a" class="remove"  to="/node-mailer">Node-mailer</router-link><br/><br/>
    </div>
</template>

<script>

    export default {
        name: 'Part',
        component: 'Mailer',
        methods: {
            calculate() {
                alert(this.$refs.item.$children);

            }
        },
        mounted() {
            this.calculate()
        }
    }



    let target = document.querySelector('.remove');


</script>

<style>

</style>