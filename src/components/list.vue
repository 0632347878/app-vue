<template>
    <div>
        <h3>Юзеров в базе <b>{{ employees.length }}</b></h3>
        <vue-single-select @checkValue="onLogin" >

        </vue-single-select>
        <table class="table table-bordered table-users">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Активен</th>
                    <th>Баланс</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Зарегистрирован</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employees" :key="employee.id" v-if="employees && employees.length > 0 && index <= limitationList">
                    <td>
                        <router-link :to="`/employees/${employee.id}`"># {{ employee.id }}</router-link>
                    </td>
                    <td> {{ employee.firstName }} </td>
                    <td> {{ employee.lastName }} </td>
                    <td> {{ employee.isActive }} </td>
                    <td> {{ employee.balance }} </td>
                    <td> {{ employee.email }} </td>
                    <td> {{ employee.phone }} </td>
                    <td> {{ employee.registered }} </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-success">show all</button>
        <ul class="pagination">
            <li class="page-item"
                :class="{ active: limitationList == 4 }">
                <a class="page-link" href="#">1</a></li>
            <li class="page-item"
                :class="{ active: limitationList == 9 }">
                <a class="page-link" href="#">2</a></li>
            <li class="page-item"
                :class="{ active: limitationList == 14 }">
                <a class="page-link" href="#">3</a></li>

        </ul>
    </div>
</template>

<script>
    import UserForm from './UserF.vue';

    export default {
    name: 'Table',
    data: () => ({
        url: 'http://localhost:3000/employees',
        users: [],
        employees: {},
        limitationList: 4
    }),
    methods: {
    onLogin(data) {
        console.log('child component send data', data)
    },
    loadData() {
        var _self = this;

//                XHR

//                let _self = this;
//                function customGet ( url, cb ) {
//                    var xmlhttp = new XMLHttpRequest();
//                    xmlhttp.onreadystatechange = function() {
//                        if (this.readyState == 4 && this.status == 200) {
//                            var data = JSON.parse(xmlhttp.response);
//                            cb(data);
//                        }
//                    };
//                    xmlhttp.open("GET", url, true);
//                    xmlhttp.send();
//                }
//                customGet(this.url, function ( response ) {
//                     _self.employees = response;
//                });

//              Fetch

        fetch(_self.url)
            .then(function(response) {
                response.json().then(function(data){
                    _self.employees = data;
            });
        })
    }
    },
    mounted() {
        this.loadData();
    },
    components: {
        VueSingleSelect: () => import('@/components/VueSingleSelect.vue')
    }
    }
</script>

<style scoped>
    .table-users {
        margin-top: 30px;
    }
    ul {
        display: block;
    }
    li {
        display: inline-block;
        padding: 5px;
        background: rgba( 255, 255, 0, 0);
    }
    .rout-item.router-link-exact-active {
        border: 1px solid #ccc;
    }

</style>
