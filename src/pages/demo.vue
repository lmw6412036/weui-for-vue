<template>
  <div class="">
    <msg @msg:hide="show=false" text="消息提示" :show="show"></msg>
  </div>
</template>

<script>
  import Msg from "../components/msg.vue"
  export default {
    data() {
      return {
        show: false
      };
    },
    computed: {},
    components: {Msg},
    mounted() {
      setTimeout((res) => {
        this.show = true;
        console.log("定时--",this.show);
      }, 5000)

      setTimeout((res) => {
        this.show = true;
        console.log("定时--",this.show);
      }, 10000)
    },
    beforeDestroy() {

    },
    methods: {}
  };
</script>

<style scoped lang="scss">

</style>
