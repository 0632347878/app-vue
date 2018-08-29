 <template>
    <div class="user-wrapper">
        User edit
        <div>{{ firstName }}</div>
        <!--<div class="element">-->
            <!--<span>there goes text</span>-->
        <!--</div>-->
        <!--<div class="numbers">{{ startValue }}</div>-->
        <div class="panel panel-primary">
            <div class="panel-heading">
                <span>{{ id }}</span>
                <div class="" v-if="checkAvailable">
                    <router-link class="btn btn-success" tag="button" :to="'/employees/' + (parseInt(id, 10) + 1 )">+1 user</router-link>
                    <router-link class="btn btn-success" tag="button" :to="'/employees/' + (parseInt(id, 10) - 1 )">-1 user</router-link>
                </div>

            </div>
        </div>
        <div class="panel-body">
            <user-form v-model="employee"></user-form>
            <!--<button class="btn btn-success" @click="save">Сохранить изменения</button>-->
        </div>
    </div>
</template>

<script>
    import UserForm from './UserF.vue'

    export default {
        name: 'list',
        data () {
            return {
                url: 'http://localhost:3000/employees/',
                employee: Object,
//                startValue: 55,
                interval: null
            }
        },
        props: {
          id: String,
          firstName: String
        },
        components: {
          UserForm
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
                if(element != null) {
                    if(element.innerHTML > 0) {
                       return element.innerHTML = element.innerHTML - 1;
                    }
                }
            },
            loadData() {
                var _self = this;
                fetch(_self.userUrl)
                .then(function(response) {
                    response.json().then(function(data){
                        _self.employee = data;
                    });
                })
            },
            checkAvailable() {
//                  console.log(id);
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
        background: rgba(0,0,0,.3);
    }
</style>