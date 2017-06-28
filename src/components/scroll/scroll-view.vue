<template>
  <div class="scroll-view" @mouseup="touchend" @touchend="touchend">
    <slot name="up">
      <div class="up" :style="upcss">
        <div v-if="nodata" :style="upcss" class="weui-loadmore">
          <span class="weui-loadmore__tips">暂无数据</span>
        </div>
        <div v-if="!nodata" class="weui-loadmore" :style="upcss">
          <i class="weui-loading"></i>
          <span class="weui-loadmore__tips">正在加载</span>
        </div>
      </div>
    </slot>
    <scroll @scroll:end="end" @scroll:start="start" @scroll:scroll="scroll" :data="data" :height="height">
      <slot></slot>
    </scroll>
    <slot name="down">
      <div class="down" :style="downcss">
        <div v-if="nodata" :style="downcss" class="weui-loadmore">
          <span class="weui-loadmore__tips">暂无数据</span>
        </div>
        <div v-if="!nodata" class="weui-loadmore" :style="downcss">
          <i class="weui-loading"></i>
          <span class="weui-loadmore__tips">正在加载</span>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import Scroll from "./scroll.vue"
  export default {
    props: {
      nodata: {
        type: Boolean,
        default: false
      },
      data: [Array, Object],
      height: [Number, String]
    },
    data() {
      return {
        upcss: {},
        downcss: {},
        pullup: false,
        pulldown: false
      };
    },
    computed: {},
    components: {Scroll},
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      _setUpCss(height){
        this.$set(this.upcss, "height", (height) + "px")
        this.$set(this.upcss, "lineHeight", (height) + "px")
      },
      _setDownCss(height){
        this.$set(this.downcss, "height", (height) + "px")
        this.$set(this.downcss, "lineHeight", (height) + "px")
      },
      start(data){
        console.log("start", data);
      },
      scroll(data){
        console.log("scroll", data.y);
        if (data.y > 0) {
          this._setUpCss(data.y);
          if (data.y > 45) {
            this.pullup = true
          }
        }
        if (data.y < data.maxScrollY) {
          this._setDownCss(data.maxScrollY - data.y);
          if (data.maxScrollY - data.y > 45) {
            this.pulldown = true
          }
        }
      },
      end(data){
        console.log("end", data);
        this._setUpCss(0);
        this._setDownCss(0);
      },
      touchend(){
        if (this.pullup) {
          this.$emit("scroll-view:pullup", "pullup");
          this.pullup = false;
        }
        if (this.pulldown) {
          this.$emit("scroll-view:pulldown", "pulldown");
          this.pulldown = false;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .scroll-view {
    position: relative;
    .weui-loadmore {
      margin-top: 0;
      margin-bottom: 0;
    }
    .weui-loadmore_line .weui-loadmore__tips{
      background-color: transparent;
    }
    .up, .down {
      overflow: hidden;
      height: 0;
      left: 0;
      width: 100%;
      position: absolute;
    }
    .up {
      top: 0;
    }
    .down {
      bottom: 0;
    }
  }
</style>
