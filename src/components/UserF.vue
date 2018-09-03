<template>
    <div class="table table-bordered table-user--own">
        <div class="user-fields">
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
                    <div class="form-group__holder">
                        <p>
                            <img class="img-thumbnail" :src="employee.picture"/> <button class="btn btn-default" @click="selectNewImage()">Выбрать новую</button>
                        </p>
                        <input type="file" class="hidden" ref="image" @change="upload"/>
                        <input type="text" class="form-control" v-model="employee.picture"/>
                    </div>
                </div>
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
            <div class="form-group">
                <label>Date of registration</label>
                <div class="form-group__inner">
                    <datepicker :value="employee.registeredDate" @change="val => employee.registeredDate = val">
                        <button slot="testslot" @click="alert('Спасибо')">Нажми на меня</button>
                    </datepicker>
                    <input type="text" class="form-control" v-model="employee.registeredDate">
                </div>
            </div>
        </div>
        <div class="user-object">
            <pre>
            {{ employee}}
        </pre>
        </div>

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
                };
                fetch(url, data, config)
                .then(function(response) {
                    response.json().then(function(data){
                        this.employee.picture = response.data.link
                        this.$refs.image.value = ''
                    });
                })
            }
        },
        components: {
            Datepicker: () => import('@/components/Datepicker.vue')
        },
        model: {
            prop: 'employee'
        },
        name: 'User',
        props: {
            employee: {
                required: true
            }
        },
        watch: {
            value: 'updateDatepicker'
        }
    }
</script>

<style>
    .table-user--own {
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
    .form-group__holder {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .form-group__inner p {
        width: 100%;
        align-items: flex-start;
        display: flex;
        margin:  0 0 15px;
    }
    .form-group__inner .btn {
        align-self: center;
        margin-left: 20px;
    }
    h3 {
        width: 100%;
    }
    label {
        margin: 0 25px 0 0;
        flex: 1 1 20%;
        align-self: center;
        text-align: left;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;

    }
    .form-group--picture {
        flex-direction: column;
        align-items: flex-start;
    }
    input.hidden {
        display: none;
    }
    pre {
        text-align: left;
        padding: 10px;
        border-radius: 10px;
        background: #ccc;
    }
    .user-fields {
        width: 58%;
    }
    .user-object {
        width: 40%;
    }
</style>