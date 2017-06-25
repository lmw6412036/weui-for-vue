<template>
    <div class="actionsheet" v-if="show">
        <div class="weui-mask" :class="{show:isshow}" @click="click('hide')"></div>
        <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':isshow}">
            <div class="weui-actionsheet__title">
                <p class="weui-actionsheet__title-text">{{title}}</p>
            </div>
            <div class="weui-actionsheet__menu">
                <div @click="click('action',item)" v-for="item in menus" class="weui-actionsheet__cell">{{item}}</div>
            </div>
            <div class="weui-actionsheet__action" @click="click('hide')">
                <div class="weui-actionsheet__cell">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "请选择您的操作"
            },
            show: {
                type: Boolean,
                default: false
            },
            menus: Array
        },
        data() {
            return {
                isshow: false
            };
        },
        computed: {},
        components: {},
        mounted() {
            this._show(this.show);
        },
        beforeDestroy() {

        },
        methods: {
            _show(value){
                if (value) {
                    setTimeout(() => {
                        this.isshow = true
                    }, 20)
                }
            },
            _hide(){
                this.isshow = false;
                setTimeout(() => {
                    this.$emit('action-sheet:hide', 'hide')
                }, 320)
            },
            click(type, menu){
                if (type == 'hide') {
                    this._hide();
                }
                if (type == "action") {
                    this.$emit("action-sheet:action", menu)
                    this._hide()
                }
            }

        },
        watch: {
            show(value){
                this._show(value);
            }
        }
    };
</script>

<style scoped lang="scss">
    .weui-mask {
        &.show {
            opacity: 1;
        }
        opacity: 0;
        transition: all 0.3s;
    }
</style>
