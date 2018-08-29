<template>
    <div class="table table-bordered">
        <h3>USER</h3>
        <div class="form-group">
            <label>firstName</label>
            <input type="text" class="form-control" v-model="employee.firstName">
        </div>
        <div class="form-group">
            <label>lastName</label>
            <input type="text" class="form-control" v-model="employee.lastName">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="employee.email">
        </div>
        <div class="form-group form-group--picture">
            <div class="form-group__inner">
                <label>URL картинки</label>
                <p>
                    <img class="img-thumbnail" :src="employee.picture"/> <button class="btn btn-default" @click="selectNewImage()">Выбрать новую</button>

                </p>
            </div>
            <input type="file" class="hide" ref="image">

            <input type="text" class="form-control" v-model="employee.picture">
        </div>
        <div class="form-group">
            <label>ID</label>
            <input type="text" class="form-control" v-model="employee.id">
        </div>
        <div class="form-group">
            <label>isActive</label>
            <input type="text" class="form-control" v-model="employee.isActive">
        </div>
        <div class="form-group">
            <label>balance</label>
            <input type="text" class="form-control" v-model="employee.balance">
        </div>
        <div class="form-group">
            <label>phone</label>
            <input type="text" class="form-control" v-model="employee.phone">
        </div>
        <div class="form-group">
            <label>registered</label>
            <input type="text" class="form-control" v-model="employee.registered">
        </div>
        <!--<div class="form-group">-->
            <!--<label>registered</label>-->
            <!--<input type="text" class="form-control" v-model="employee.picture">-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        data: () => ({
            accessList: ['guest', 'user', 'admin']
        }),
        methods: {
            selectNewImage() {
                this.$refs.image.click()
            },
            upload () {
                const url = 'http://api.imgur.com/3/image';

                const data = new FormData();
                data.append('image', this.$refs.image.files[0]);
                const config = {
                    headers: {
                        'Authorization': 'Client-ID 3bef0b8892d4b04'
                    }
                }

                fetch(url, data, config)
                        .then(function(response) {
                            response.json().then(function(data){
                                this.employee.picture = response.data.link;
                                this.$refs.image.value = ''
                            });
                        })

            }
        },
        model: {
            prop: 'employee'
        },
        name: 'User',
        props: {
            employee: {
                required: true
            }
        }
    }
</script>

<style>
    .table {
        padding: 10px 20px;
    }
    .panel-body {
        max-width: 80%;
        margin: 30px auto 0;
    }
    .form-group {
        display: flex;
        align-items: center;
    }
    .form-group__inner {
        display: flex;
        width: 100%;
    }
    label {
        margin: 0;
        flex: 1 1 20%;
    }
    .form-group--picture {
        flex-direction: column;
        align-items: flex-start;
    }
    input.hidden {
        display: none;
    }
</style>