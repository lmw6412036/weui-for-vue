<template>
    <div ref="chart" class="chart">
        <scroll ref="scroll"
                :height="scrollHeight"
                :data="data">
            <div>
                <slot name="diymsg"></slot>
                <ul>
                    <li ref="item" v-for="item in data"><img src="http://p3.ifengimg.com/a/2017_26/20d0751eab3c555.jpg"
                                                             width="40%" @load="load" alt="">{{item}}
                    </li>
                </ul>
            </div>
        </scroll>
        <div class="send" ref="send">底部</div>
    </div>
</template>

<script>
    import Scroll from "../scroll/scroll.vue"
    export default {
        props: {
            height: [Number, String]
        },
        data() {
            return {
                scrollHeight: 0,
                data: []
            };
        },
        created(){

        },
        computed: {},
        components: {Scroll},
        mounted() {
            setTimeout(() => {
                for (let i = 0; i < 100; i++) {
                    this.data.push("li" + i);
                }
                this._toBottom();
            }, 3000)
            this._init(this.height);
        },
        beforeDestroy() {

        },
        methods: {
            _init(height){
                let chart = this.$refs.chart, send = this.$refs.send;
                let h = send.clientHeight;
                chart.style.height = parseInt(height) + "px";
                this.scrollHeight = parseInt(height) - h;
            },
            _toBottom(){
                setTimeout(() => {
                    let scroll = this.$refs.scroll;
                    let items = this.$refs.item;
                    scroll.scrollToElement(items[items.length - 1], 0);
                }, 200)
            },
            load(e){
                let scroll = this.$refs.scroll;
                scroll.refresh();
            }
        },
        watch: {
            height(value){
                this._init(value);
            }
        }
    };
</script>

<style scoped lang="scss">
    .chart {
        overflow: hidden;
    }
</style>
