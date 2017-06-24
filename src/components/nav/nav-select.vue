<template>
    <div ref="navSelect" class="nav-select" @click="wrap()">
        <slot></slot>
        <div ref="wrap" :style="wrapStyle" class="wrap" v-if="data.length>0&&show">
            <div class="mask"></div>
            <div class="main" :class="{down:down}" ref="main" :deep="deep">
                <scroll ref="scroll" v-if="scrollHeight" :height="scrollHeight" v-for="i in deep" :key="i">
                    <ul>
                        <li @click="click(item,i-1,$event)" :class="{'current':active[i-1]==item.value}"
                            v-for="item in list[i-1]">
                            {{item.label}}
                        </li>
                    </ul>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import Scroll from "../scroll/scroll.vue"
    import {timeFormat} from "d3-time-format"
    import Datatype from '../../lib/datatype'
    export default {
        props: {
            top: [String, Number],
            data: Array,
            id: String,
            currentId: String
        },
        data() {
            return {
                show: false,
                down: false,
                deep: 0,
                itemType: "",
                list: [],
                scrollHeight: 0,
                activeItem: [],
                active: [],
                wrapStyle: {}
            };
        },
        computed: {},
        components: {Scroll},
        created(){
            this._init();
        },
        mounted() {
            var hhh = window.innerHeight;
            //this.$refs.wrap.style.top = h + "px";
            //this.scrollHeight = (hhh - h) * 0.7
            if (this.data) {
                this.list.push(this.data[0]);
                this._setActive(this.data[0][0], 0);
            }

            if (this.deep > 1) {
                if (this.itemType == "cascade") {
                    this.list.push(this.data[0][0].children);
                    this._setActive(this.data[0][0].children[0], 1);
                }
                if (this.itemType == "parallel") {
                    this.list.push(this.data[1])
                }
            }
        },
        beforeDestroy() {

        },
        methods: {
            _init(){
                if (this.data.length > 1) {
                    this.deep = this.data.length;
                    this.itemType = "parallel";
                } else if (this.data.length == 1) {
                    this._deepArr(this.data[0]);
                    if (this.deep == 1) {
                        this.itemType = "simple";
                    } else {
                        this.itemType = "cascade";
                    }
                }
            },
            _deepArr(arr){
                if (Datatype(arr) == "Array") {
                    this.deep++;
                    this._deepArr(arr[0]);
                }
                if (Datatype(arr) == "Object") {
                    for (let i in arr) {
                        if (Datatype(arr[i]) == "Array") {
                            this._deepArr(arr[i]);
                        }
                    }
                }
            },
            _setActive(item, index){
                this.activeItem.splice(index, 1, {value: item.value, label: item.label})
                this.active.splice(index, 1, item.value);
                if (index == 0) {
                    if (this.itemType == "cascade") {
                        this.list.splice(1, 1, item.children);
                        this._setActive(item.children[0], 1);
                    }
                }
            },
            _initScroll(){
                let hhh = window.innerHeight;
                let h = parseInt(this.top);
                this.scrollHeight = (hhh - h) * 0.7;
            },
            _showWrap(){
                this.show = true;
                this.$set(this.wrapStyle, "top", parseInt(this.top) + "px");
                this.$set(this.wrapStyle, "zIndex", parseInt(timeFormat("%H%M%S")(new Date())));
                this.$emit("nav-select:show", this.id)
                setTimeout((res) => {
                    this.down = true;
                    setTimeout((res) => {
                        this._initScroll();
                    }, 300)
                }, 20)
            },
            _hideWrap(){
                this.show = false;
                this.down = false;
            },
            click(item, index, e){
                this._setActive(item, index);
                if (index == 1||this.itemType=="simple") {
                    this.$emit('nav-select:change', this.activeItem);
                    this._hideWrap();
                }
                e.stopPropagation();
            },
            wrap(){
                if (!this.show) {
                    this._showWrap()
                } else {
                    this._hideWrap()
                }
            }

        },
        watch: {
            currentId(value){
                if (value != this.id) {
                    this._hideWrap();
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .nav-select {
        position: relative;
        .wrap {
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            .mask, .main {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
            }
            .mask {
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }
            .main {
                &.down {
                    height: 70%;
                }
                height: 0;
                transition: all 0.2s;
                overflow: hidden;
                background-color: white;
                display: flex;
                z-index: 1000;
                li {
                    position: relative;
                    height: 50px;
                    line-height: 50px;
                    z-index: 3000;
                }
                li + li::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    height: 1px;
                    background-color: #e5e5e5;
                    transform-origin: 0 100%;
                    transform: scaleY(0.5);
                }
                @each $i in 1, 2, 3 {
                    &[deep="#{$i}"] {
                        > * {
                            position: relative;
                            width: 100% / $i;
                        }
                    }
                }
                &[deep='1'] {
                    li {
                        text-align: center;
                    }
                }
                &[deep='2'] {
                    > div:first-child {
                        background-color: #fafafa;
                        z-index: 20;
                    }
                    &::before {
                        position: absolute;
                        left: 50%;
                        top: 0;
                        bottom: 0;
                        width: 1px;
                        background-color: #e5e5e5;
                        content: "";
                        transform: scaleX(0.5);
                        transform-origin: 0 0;
                        z-index: 10;
                    }
                    li {
                        &.current {
                            background-color: white;
                            &::before {
                                z-index: 4000;
                                content: "";
                                position: absolute;
                                left: 100%;
                                top: 0;
                                width: 1px;
                                background-color: white;
                                height: 100%;
                            }
                        }
                        padding-left: 15px;
                    }
                }
            }
        }
        &::after {
            margin-left: 5px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 10px solid #999;
            display: inline-block;
            content: "";
            //position: absolute;
            height: 0;
            width: 0;
        }
    }
</style>
