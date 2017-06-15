<template>
    <div id="toast" v-if="show">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            time: {
                type:Number,
                default:3000
            },
            show: Boolean
        },
        computed:{

        },
        data() {
            return {
            }
        },
        mounted() {
        },
        beforeDestroy() {

        },
        watch:{
            show(value){
                if(!value){return}
                setTimeout(()=>{
                    this.$bus.$emit("toasthide",{
                        show:false
                    })
                },this.time)
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
