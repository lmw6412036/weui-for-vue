<template>
  <div class="weui-cells weui-cells_form">
    <select-picker :data="data" :value="form.value"></select-picker>
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
  import SelectPicker from "../components/form/select-picker.vue"


  export default {
    data() {
      return {
        data: [[
          {
            label: '1',
            value: '1'
          }, {
            label: '2',
            value: '2'
          }, {
            label: '3',
            value: '3'
          }
        ], [
          {
            label: 'A',
            value: 'A'
          }, {
            label: 'B',
            value: 'B'
          }, {
            label: 'C',
            value: 'C'
          }
        ]],
        form: {
          value: ["1","C"]
        },
        disabled: true,
        show: false
      };
    },
    computed: {},
    components: {FormButton, Msg, Loading, Toast, FormInput, Alert, Confirm, SelectPicker},
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
