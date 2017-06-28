<template>
    <div class="weui-cells weui-cells_form">
        <form-code @code:ok="countdown=true" @code:countdownend="countdown=false" @code:error="error" :countdown="countdown"  v-model="code" default-time="10" label="验证码" :mobile="mobile"></form-code>
        {{code}}
    </div>
</template>

<script>
    import FormCode from "../../components/form/code.vue"
    export default {
        data() {
            return {
                code:"123",
                countdown:false,
                mobile:15868823516
            };
        },
        computed: {},
        components: {FormCode},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            error(){

            },
            send(){

            }
        }
    };
</script>

<style scoped lang="scss">

</style>
