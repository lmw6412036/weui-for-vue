<template>
  <div ref="msg" class="msg" :class="{show:goup}" v-if="show">
    <span class="big">{{text}}</span>
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
    data() {
      return {
        goup: false
      };
    },
    computed: {},
    components: {},
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      _hide(){
        setTimeout((res) => {
          this.goup = false;
          this.$emit("msg:hide","hide");
        }, this.time)
      }
    },
    watch: {
      show(value){
        if (value) {
          setTimeout(() => {
            this.goup = true;
            this._hide();
          }, 20)
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .msg {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20170000;
    opacity: 0;
    text-align: center;
    transition: all 0.2s;
    &.show {
      opacity: 1;
      bottom: 5rem;
    }
    span {
      max-width: 80%;
      border-radius: .5rem;
      padding: .5rem 2rem;
      display: inline-block;
      color: white;
      background-color: rgba(0, 0, 0, .5);
    }
  }
</style>
