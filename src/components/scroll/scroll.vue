<template>
    <div class="iscroll" ref="iscoll">
        <slot></slot>
    </div>
</template>

<script>
    import IScroll from "iscroll/build/iscroll-probe"
    export default {
        props: {
            data: [Array, Object],
            height: [Number, String]
        },
        data() {
            return {
                iscroll: ""
            };
        },
        computed: {},
        components: {},
        mounted() {
            if (this.height) {
                this._init();
            }
        },
        beforeDestroy() {

        },
        methods: {
            _init(){
                this.$refs.iscoll.style.height = parseInt(this.height) + "px";
                setTimeout((res) => {
                    this.iscroll = new IScroll(this.$refs.iscoll, {
                        mouseWheel: true,
                        probeType: 2,
                        click: true,
                    });
                    this.iscroll.on("scroll", this._scroll)
                    this.iscroll.on("scrollEnd", this._scrollEnd)
                    this.iscroll.on("scrollStart", this._scrollStart)

                }, 20)
            },
            _getData(iscroll){
                let res = {};
                for (let i in iscroll) {
                    if (typeof iscroll[i] == "string" || typeof iscroll[i] == "number" || typeof iscroll[i] == "boolean") {
                        res[i] = iscroll[i];
                    }
                }
                return res;
            },
            _scroll(){
                this.$emit("scroll:scroll", this._getData(this.iscroll));
            },
            _scrollEnd(){
                this.$emit("scroll:end", this._getData(this.iscroll));
            },
            _scrollStart(){
                this.$emit("scroll:start", this._getData(this.iscroll));
            },
            scrollToElement(){
                this.iscroll && this.iscroll.scrollToElement.apply(this.iscroll, arguments);
            },
            refresh(){
                this.iscroll && this.iscroll.refresh.apply(this.iscroll,arguments);
            }
        },
        watch: {
            data(value){
                if (this.iscroll) {
                    setTimeout((res) => {
                        this.refresh();
                    }, 100)
                }
            },
            height(){
                if (this.iscroll) {
                    this.refresh();
                } else {
                    this._init();
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .iscroll {
        overflow: hidden;
        > * {
            touch-action: none;
        }
    }

    li {
        list-style: none;
    }
</style>
