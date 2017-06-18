<template>
    <a href="javascript:;" @click="click()" class="weui-btn" :class="[type,{'weui-btn_disabled':disabled},{'weui-btn_loading':loading}]"><i v-if="loading" class="weui-loading"></i>{{value}}</a>
</template>

<script>
    export default {
        props:{
            value:String,
            type:{
                type:String,
                default:"weui-btn_default"
            },
            disabled:{
                type:Boolean,
                default:false
            },
            loading:{
                type:Boolean,
                default:false
            },
            click:Function
        },
        data() {
            return {};
        },
        computed: {},
        components: {},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {}
    };
</script>

<style scoped lang="scss">

</style>
