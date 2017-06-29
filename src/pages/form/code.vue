<template>
  <div class="weui-cells weui-cells_form">
    <form-code @code:ok="countdown=true" @code:countdownend="countdown=false" @code:error="error" :countdown="countdown"
               v-model="code" default-time="10" label="验证码" :mobile="mobile"></form-code>

    <form-input label="姓名" v-model="code"></form-input>
    <pre>{{$v.code}}</pre>
  </div>
</template>

<script>
  import FormInput from "../../components/form/input.vue"
  import FormCode from "../../components/form/code.vue"
  import {required} from "vuelidate/lib/validators"
  import regex from "../../lib/regex"

  export default {
    data() {
      return {
        code: "123",
        countdown: false,
        mobile: 15868823516
      };
    },
    validations: {
      code: {
        required,
        regex:regex("ldldll")
      }
    },
    computed: {},
    components: {FormInput, FormCode},
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
