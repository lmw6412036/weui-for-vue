<template>
    <div class="weui-cells weui-cells_form">
        <date-picker v-model="date" label="生日"></date-picker>
        <div>res:{{date}}</div>
    </div>
</template>

<script>
    import DatePicker from "../../components/form/date-picker.vue"
    export default {
        data() {
            return {
                date: "1986-04-25"
            };
        },
        computed: {},
        components: {DatePicker},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            ok(res){

            }
        }
    };
</script>

<style scoped lang="scss">

</style>
