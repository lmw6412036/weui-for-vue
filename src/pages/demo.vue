<template>
    <ul>
        <li style="float: left;width: 40%">
            <nav-select @nav-select:show="getCurrent" id="s1" :current-id="currentId" :data="data2" :top="top">
                <span>选择2</span>
            </nav-select>
        </li>
        <li style="float: left;width: 40%">
            <nav-select @nav-select:show="getCurrent" id="s2" :current-id="currentId" :data="data1" :top="top">
                <span>选择1</span>
            </nav-select>
        </li>
    </ul>
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

    import Demo from "../data/demo"
    export default {
        data() {
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
            let arr1 = arr.map((item, index) => {
                return new Demo({value: item});
            });
            let arr2 = arr1.map((item, index) => {
                return Object.assign({}, item, {
                    children: [1, 2, 3, 4, 5, 6].map((res) => {
                        return Object.assign({}, new Demo({value: res}));
                    })
                })
            });

            return {
                top: 45,
                currentId: "",
                data1: [arr2],
                data2: [arr1],
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
            },
            getCurrent(res){
                this.currentId=res;
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
