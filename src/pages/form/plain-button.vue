<template>
    <div>
        <plain-button value="确定" type="weui-btn_plain-primary"></plain-button>
    </div>
</template>

<script>
    import PlainButton from "../../components/form/plain-button.vue"
    export default {
        data() {
            return {
                disabled:true
            };
        },
        computed: {},
        components: {PlainButton},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {}
    };
</script>

<style scoped lang="scss">

</style>
