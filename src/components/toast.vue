<template>
  <div id="toast" v-if="show">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon-success-no-circle weui-icon_toast"></i>
      <p class="weui-toast__content">{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      time: {
        type: Number,
        default: 3000
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: {},
    data() {
      return {
        doshow: false
      }
    },
    mounted() {
      this._show(this.show);
    },
    methods: {
      _show(value){
        if (value) {
          this.doshow = true;
          setTimeout((res) => {
            this._hide();
          }, 20)
        }
      },
      _hide(){
        setTimeout((res) => {
          this.$emit("toast:hide", "hide");
        }, this.time)
      }
    },
    beforeDestroy() {

    },
    watch: {
      show(value){
        this._show(value);
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
