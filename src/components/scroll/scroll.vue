<template>
  <div class="iscroll" ref="iscoll">
    <slot></slot>
  </div>
</template>

<script>
  import "iscroll"
  export default {
    props: {
      height: [Number, String]
    },
    data() {
      return {
        iscroll: ""
      };
    },
    computed: {},
    components: {},
    mounted() {
      if (this.height) {
        this.$refs.iscoll.style.height = parseInt(this.height) + "px";
        this._init();
      }
    },
    beforeDestroy() {

    },
    methods: {
      _init(){
        setTimeout((res) => {
          console.log(this.$refs.iscoll);
          this.iscroll = new IScroll(this.$refs.iscoll, {
            mouseWheel: true,
            probeType: 2,
            click: true
          });
        }, 20)
      }
    },
    watch: {}
  };
</script>

<style scoped lang="scss">
  .iscroll {
    > * {
      touch-action: none;
    }
  }

  li {
    list-style: none;
  }
</style>
