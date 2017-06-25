<template>
    <div v-if="show">
        <div class="weui-gallery" :class="{show:isshow}" v-if="show">
            <span class="weui-gallery__img" :style="style"></span>
            <div class="weui-gallery__opr">
                <a href="javascript:" @click="confirm=true" class="weui-gallery__del">
                    <i class="weui-icon-delete weui-icon_gallery-delete"></i>
                </a>
            </div>
        </div>
        <confirm @confirm:hide="confirm=false" :ok="del" :show="confirm" content="是否删除该图片？"></confirm>
    </div>

</template>

<script>
    import Confirm from "./dialog/confirm.vue"
    export default {
        props: {
            url: {
                type: String,
                required: true
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                confirm: false,
                isshow: false,
                style: {
                    backgroundImage: `url(${this.url})`
                }
            };
        },
        computed: {},
        components: {Confirm},
        mounted() {
            this._show(this.show);
        },
        beforeDestroy() {

        },
        methods: {
            _show(value){
                if (value) {
                    setTimeout(() => {
                        this.isshow = true;
                    }, 20)
                }
            },
            _hide(){
                this.isshow = false;
                setTimeout(() => {
                    this.$emit("gallery:hide", "hide")
                }, 320)
            },
            del(){
                this.$emit('gallery:delete',this.url);
                this._hide();
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
    .weui-gallery {
        opacity: 0;
        display: block;
        top: 50%;
        right: 50%;
        bottom: 50%;
        left: 50%;
        transition: all 0.3s;
        &.show {
            opacity: 1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
        }
    }
</style>
