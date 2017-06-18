<template>
    <div class="">
        <confirm @confirm:hide="show=false" :ok="ok" :cancel="cancel" content="confirm" :show="show"></confirm>
        <form-button type="weui-btn_primary" :click="ok" :loading="disabled" value="确定"></form-button>
    </div>
</template>
<script>
    import FormButton from "../components/form/button.vue"
    import Confirm from "../components/dialog/confirm.vue"
    import Alert from "../components/dialog/alert.vue"
    import Toast from "../components/toast.vue"
    import Loading from "../components/loading.vue"
    import Msg from "../components/msg.vue"
    import FormInput from "../components/form/input.vue"


    export default {
        data() {
            return {
                form: {
                    name:"lmw"
                },
                disabled:true,
                show: false
            };
        },
        computed: {},
        components: {FormButton,Msg, Loading, Toast, FormInput,Alert,Confirm},
        mounted() {
            setTimeout((res) => {
                this.show = true;
            }, 5000)
        },
        beforeDestroy() {
        },
        methods: {
            ok(){
                alert("ok")
            },
            cancel(){
                alert("cancel")
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
