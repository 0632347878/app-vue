 <template>
    <div class="user-wrapper">
        User edit
        <div>{{ id }}</div>
        <div>{{ firstName }}</div>
        <div class="element">
            <span>there goes text</span>
        </div>
        <div class="numbers">{{ startValue }}</div>
    </div>
</template>

<script>
    export default {
        name: 'UserEdit',
        data () {
            return {
                startValue: 55,
                interval: null
            }
        },
        props: {
          id: String,
          firstName: String
        },
        methods: {
            startCounter() {
                let element = document.querySelector('.numbers');
                if(element != null) {
                    if(element.innerHTML > 0) {
                       return element.innerHTML = element.innerHTML - 1;
                    }
                }
            }
        },
        mounted () {
            this.interval = setInterval(this.startCounter, 1000);
        },
        destroyed () {
            clearInterval(this.interval);
        }
    }
</script>
<style>
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