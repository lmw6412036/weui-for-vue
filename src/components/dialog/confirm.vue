<template>
    <div class="confirm" :class="{show:isshow}" v-if="show">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{title}}</strong></div>
            <div class="weui-dialog__bd">{{content}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" @click="click('cancel')" class="weui-dialog__btn weui-dialog__btn_default">{{btn[1]}}</a>
                <a href="javascript:;" @click="click('ok')" class="weui-dialog__btn weui-dialog__btn_primary">{{btn[0]}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "提示"
            },
            content: String,
            show: {
                type: Boolean,
                default: false
            },
            btn: {
                type: Array,
                default: ()=>['确定','取消']
            },
            ok: Function,
            cancel: Function
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
                        this.isshow = value;
                    }, 20)
                }
            },
            _hide(type){
                this.isshow=false;
                setTimeout(() => {
                    this.$emit('confirm:hide');
                    if(type=="ok"&&this.ok){
                        this.ok();
                    }
                    if(type=="cancel"&&this.cancel){
                        this.cancel();
                    }
                },500);
            },

            click(type){
                this._hide(type)
            }
        },
        watch:{
            show(value){
                this._show(value);
            }
        }
    };
</script>

<style scoped lang="scss">
    .confirm {
        opacity: 0;
        transition: all 0.5s;
        &.show {
            opacity: 1;
        }
    }
</style>
