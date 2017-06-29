<template>
    <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">{{label}}</div>
        <div class="weui-cell__ft">
            <input v-model="open" class="weui-switch" type="checkbox">
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            label:String,
            value:Boolean
        },
        data() {
            return {
                open:this.value
            };
        },
        computed: {},
        components: {},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {},
        watch:{
            open(value){
                this.$emit("input",value);
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
