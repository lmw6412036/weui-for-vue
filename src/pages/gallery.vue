<template>
    <div>
        <a @click="scan()">预览</a>
        <gallery :url="url" @gallery:hide="show=false" :show="show"></gallery>
    </div>
</template>

<script>
    import Gallery from "../components/gallery.vue"
    export default {
        data() {
            return {
                show: false,
                url: "http://static.hztywl.cn/project/weui-for-vue/20170624185452459.jpg"
            };
        },
        computed: {},
        components: {
            Gallery
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            scan(){
                this.show = true;
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
