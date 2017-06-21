<template>
    <nav-select></nav-select>
</template>
<script>
    import FormButton from "../components/form/button.vue"
    import Confirm from "../components/dialog/confirm.vue"
    import Alert from "../components/dialog/alert.vue"
    import Toast from "../components/toast.vue"
    import Loading from "../components/loading.vue"
    import Msg from "../components/msg.vue"
    import FormInput from "../components/form/input.vue"
    import SelectPicker from "../components/form/select-picker.vue"
    import DatePicker from "../components/form/date-picker.vue"
    import NavSelect from "../components/nav/nav-select.vue"

    export default {
        data() {
            return {
                data: [],
                form: {
                    value: ""
                },
                disabled: true,
                show: false
            };
        },
        computed: {},
        components: {FormButton, Msg, Loading, Toast, FormInput, Alert, Confirm, SelectPicker, DatePicker, NavSelect},
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
