<template>
  <div id="loadingToast" v-if="show">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text:String,
      show:Boolean
    },
    data() {
      return {};
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {}
  };
</script>

<style scoped lang="scss">

</style>
