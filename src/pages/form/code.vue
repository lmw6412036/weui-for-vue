<template>
  <div>
    <div class="weui-cells weui-cells_form">
      <form-code @code:ok="countdown=true" @code:countdownend="countdown=false" @code:error="error"
                 :countdown="countdown"
                 v-model="code" default-time="10" label="验证码" :mobile="mobile"></form-code>
      <form-input label="姓名" v-model="name"></form-input>
      <form-switch label="开关" v-model="open"></form-switch>
    </div>
    <form-radio label="选择性别" name="sex" v-model="sex" :data="sexArr"></form-radio>
    <form-checkbox label="选择科室" name="dept" v-model="dept" :data="deptArr"></form-checkbox>
  </div>
</template>

<script>
  import FormSwitch from "../../components/form/switch.vue"
  import FormInput from "../../components/form/input.vue"
  import FormCode from "../../components/form/code.vue"
  import {required} from "vuelidate/lib/validators"
  import regex from "../../lib/regex"
  import FormRadio from "../../components/form/radio.vue"
  import FormCheckbox from "../../components/form/checkbox.vue"


  export default {
    created(){
      this.sexArr = [1, 2].map((res) => {
        return {value: res, text: res == 1 ? "男" : "女"}
      })
      this.deptArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((res) => {
        return {
          value: res,
          text: "科室" + res
        }
      })
    },
    data() {
      return {
        sex: 1,
        dept: [2],
        name: "lmw",
        code: "123",
        open: true,
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
    components: {FormCheckbox, FormRadio, FormSwitch, FormInput, FormCode},
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
