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
      this._show(this.show);
    },
    beforeDestroy() {
    },
    methods: {
      _show(value){
        if (value) {
          setTimeout(() => {
            this.goup = true;
            this._hide();
          }, 20)
        }
      },
      _hide(){
        setTimeout((res) => {
          this.goup = false;
          setTimeout((res) => {
              this.$emit("msg:hide",'hide')
          }, 200)
        }, this.time)
      }
    },
    watch: {
      show(value){
        this._show(value);
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
