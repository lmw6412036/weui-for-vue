<template>
    <div class="weui-cells weui-cells_form">
        <form-code @code:ok="countdown=true" @code:countdownend="countdown=false" @code:error="error"
                   :countdown="countdown"
                   v-model="code" default-time="10" label="验证码" :mobile="mobile"></form-code>

        <form-input label="姓名" v-model="name"></form-input>
        <form-switch label="开关" v-model="open"></form-switch>

    </div>
</template>

<script>
    import FormSwitch from "../../components/form/switch.vue"
    import FormInput from "../../components/form/input.vue"
    import FormCode from "../../components/form/code.vue"
    import {required} from "vuelidate/lib/validators"
    import regex from "../../lib/regex"

    export default {
        data() {
            return {
                name: "lmw",
                code: "123",
                open:true,
                countdown: false,
                mobile: 15868823516
            };
        },
        validations: {
            code: {
                required,
                regex: regex("ldldll")
            }
        },
        computed: {},
        components: {FormSwitch,FormInput, FormCode},
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
