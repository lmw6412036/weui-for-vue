<template>
  <div class="">
    <toast @toast:hide="show=false" :show="show" text="成功"></toast>
  </div>
</template>

<script>
  import Toast from "../components/toast.vue"
  import Loading from "../components/loading.vue"
  import Msg from "../components/msg.vue"

  export default {
    data() {
      return {
        show: true
      };
    },
    computed: {},
    components: {Msg, Loading, Toast},
    mounted() {
      setTimeout((res) => {
        this.show = true;
      }, 10000)
    },
    beforeDestroy() {
    },
    methods: {}
  };
</script>

<style scoped lang="scss">

</style>
