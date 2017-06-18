<template>
    <div class="alert" :class="{show:isshow}" v-if="show">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__bd">{{content}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" @click="click()" class="weui-dialog__btn weui-dialog__btn_primary">{{btn}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            btn: {
                type: String,
                default: "确定"
            },
            content: {
                type: String
            },
            callback: {
                type: Function
            }
        },
        data() {
            return {
                isshow: false
            };
        },
        computed: {},
        components: {},
        methods: {
            _show(value){
                if (value) {
                    setTimeout(() => {
                        this.isshow = value;
                    }, 20)
                }
            },

            click(){
                this.isshow=false;
                setTimeout(() => {
                    this.$emit("alert:hide",'hide');
                    if(this.callback){
                        this.callback();
                    }
                },500)
            }
        },
        mounted() {
            this._show(this.show)
        },
        beforeDestroy() {

        },
        watch: {
            show(value){
                this._show(value);
            }
        }
    };
</script>

<style scoped lang="scss">
    .alert {
        transition: all 0.5s;
        opacity: 0;
        &.show {
            opacity: 1;
        }
    }
</style>
