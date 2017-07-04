<template>
  <div ref="chart" class="chart">
    <scroll ref="scroll"
            :height="scrollHeight"
            :data="data">
      <div class="list">
        <slot name="diymsg"></slot>
        <ul>
          <li :class="[item.msgtType]" ref="item" v-for="item in data">
            <div class="time"></div>
            <div class="item">
              <div class="ava"><img @load="load" :src="item.msgAva" alt=""></div>
              <div class="arrow"></div>
              <div class="content">{{item.msgContent}}</div>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
    <div class="foot" ref="foot" v-if="hasfoot">
      <sendbox @sendbox:heightchange="heightchange"></sendbox>
    </div>
  </div>
</template>

<script>
  import Sendbox from "./sendbox.vue"
  import Scroll from "../scroll/scroll.vue"
  export default {
    props: {
      height: [Number, String],
      hasfoot: Boolean,
      data: [Array, Object]
    },
    data() {
      return {
        scrollHeight: 0
      };
    },
    created(){

    },
    computed: {},
    components: {Scroll, Sendbox},
    mounted() {
      this._init(this.height);
    },
    beforeDestroy() {

    },
    methods: {
      _init(height){
        let chart = this.$refs.chart, foot = this.$refs.foot;
        let h = foot ? (foot.style.height || foot.clientHeight) : 0;
        chart.style.height = parseInt(height) + "px";
        this.scrollHeight = parseInt(height) - parseInt(h);
      },
      toBottom(){
        setTimeout(() => {
          let scroll = this.$refs.scroll;
          let items = this.$refs.item;
          scroll.scrollToElement(items[items.length - 1], 0);
        }, 200)
      },
      load(e){
        let scroll = this.$refs.scroll;
        scroll.refresh();
      },
      heightchange(height){
        console.log('hhh', height);
        let foot = this.$refs.foot;
        foot.style.height = height + "px";
        setTimeout((res) => {
          this._init(this.height);
        }, 20);
      }
    },
    watch: {
      height(value){
        this._init(value);
      },
      data(){
        this.toBottom();
      }
    }
  };
</script>

<style scoped lang="scss">
  .chart {
    overflow: hidden;
    position: relative;
    .list {
      ul {
        li {
          &.self {
            .item {
              flex-direction: row-reverse;
              .arrow{
                border-left: 10px solid #2D93CA;
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-right: 0px none;
              }
            }
          };
          &.other {

          }
          .item {
            $w1: 40px;
            padding: 0 10px 10px 10px;
            display: flex;
            align-items: flex-start;
            .ava {
              flex: 0 0 auto;
              img {
                width: $w1;
                height: $w1
              }
            }
            .arrow {
              border-right: 10px solid #2D93CA;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              border-left: 0px none;
              width: 0;
              height: 0;
              transform: translate(0, $w1/2 - 5px);
            }
            .content {
              flex: 1 1 auto;
              background-color: #2D93CA;
              border-radius: 5px;
              padding: 5px;
              min-height: $w1;
            }
          }
        }
      }
    }
    .foot {
      transition: all 0.2s;
      height: 45px;
      background-color: white;
    }
  }
</style>
