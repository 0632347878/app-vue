<template>
    <div>
        <h3>Юзеров в базе <b>{{ employees.length }}</b></h3>
        <div>
            <vue-single-select @checkValue="onLogin"></vue-single-select>
            <button @click="showAll" class="btn btn-success">show all</button>
        </div>
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
        <ul class="pagination">
            <li @click="pageOne"
                class="page-item"
                :class="{ active: limitationList == 4 }">
                <a class="page-link" href="#">1</a></li>
            <li @click="pageTwo"
                class="page-item"
                :class="{ active: limitationList == 9 }">
                <a class="page-link" href="#">2</a></li>
            <li @click="pageThree"
                class="page-item"
                :class="{ active: limitationList == 14 }">
                <a class="page-link" href="#">3</a></li>
        </ul>
    </div>
</template>

<script>
    import UserForm from './UserF.vue';

    export default {
    name: 'Table',
    data () {
        return {
            url: 'http://localhost:3000/employees',
            users: [],
            employees: {},
            employeesConst: {},
            employeesPageOne: {},
            employeesPageTwo: {},
            employeesPageThree: {},
            limitationList: 4
        }
    },
    methods: {
        pageOne () {
            this.employees = this.employeesPageOne
        },
        pageTwo () {
            this.employees = this.employeesPageTwo
        },
        pageThree () {
            this.employees = this.employeesPageThree
        },
        onLogin(data) {
            console.log('child component send data', data);
            this.limitationList = data.limitationList
        },
        showAll() {
            this.employees = this.employeesConst;
            this.limitationList = this.employeesConst.length
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
                        _self.employeesConst = data;
                        _self.employeesPageOne   = _self.employees.slice(0,5);
                        _self.employeesPageTwo   = _self.employees.slice(5,10);
                        _self.employeesPageThree = _self.employees.slice(10,15)
                });
            })
        }
    },
    mounted() {
        this.loadData();
    },
    components: {
        VueSingleSelect () {
          return import('@/components/VueSingleSelect.vue')
        }
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
    h3 + div {
        display: flex;
        justify-content: space-between;
        width : 200px;
        margin: auto;
    }

</style>
