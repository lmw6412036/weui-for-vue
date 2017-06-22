<template>
  <div ref="navSelect" class="nav-select">
    <span>选择</span>
    <div ref="wrap" class="wrap">
      <div class="mask"></div>
      <div class="main" :deep="deep">
        <scroll ref="scroll" v-if="scrollHeight" :height="scrollHeight" v-for="i in deep" :key="i">
          <ul>
            <li @click="click(item,i-1)" :class="{'current':active[i-1]==item.value}" v-for="item in list[i-1]">
              {{item.label}}
            </li>
          </ul>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from "../scroll/scroll.vue"
  import {timeFormat} from "d3-time-format"
  import Datatype from '../../lib/datatype'
  export default {
    props: {
      data: Array
    },
    data() {
      return {
        deep: 0,
        itemType: "",
        list: [],
        scrollHeight: 0,
        activeItem: [],
        active: []
      };
    },
    computed: {},
    components: {Scroll},
    created(){
      this._init();
    },
    mounted() {
      var hhh = window.innerHeight;
      var www = window.innerWidth;
      var h = this.$refs.navSelect.clientHeight;
      this.$refs.wrap.style.top = h + "px";
      this.scrollHeight = (hhh - h) * 0.7

      if (this.data) {
        this.list.push(this.data[0]);
        this._setActive(this.data[0][0], 0);
      }

      if (this.deep > 1) {
        if (this.itemType == "cascade") {
          this.list.push(this.data[0][0].children);
          this._setActive(this.data[0][0].children[0], 1);
        }
        if (this.itemType == "parallel") {
          this.list.push(this.data[1])
        }
      }

    },
    beforeDestroy() {

    },
    methods: {
      _init(){
        if (this.data.length > 1) {
          this.deep = this.data.length;
          this.itemType = "parallel";
        } else if (this.data.length == 1) {
          this._deepArr(this.data[0]);
          if (this.deep == 1) {
            this.itemType = "simple";
          } else {
            this.itemType = "cascade";
          }
        }
      },
      _deepArr(arr){
        if (Datatype(arr) == "Array") {
          this.deep++;
          this._deepArr(arr[0]);
        }
        if (Datatype(arr) == "Object") {
          for (let i in arr) {
            if (Datatype(arr[i]) == "Array") {
              this._deepArr(arr[i]);
            }
          }
        }
      },
      _setActive(item, index){
        this.activeItem.splice(index, 1, {value: item.value, label: item.label})
        this.active.splice(index, 1, item.value);
        if (index == 0) {
          if (this.itemType == "cascade") {
            this.list.splice(1, 1, item.children);
            this._setActive(item.children[0],1);
          }
        }
      },
      click(item, index){
        this._setActive(item, index);
        if(index==1){
          this.$emit('nav-select:change',this.activeItem);
        }
      }

    }
  };
</script>

<style scoped lang="scss">
  .nav-select {
    position: relative;
    height: 45px;
    line-height: 45px;
    span {

    }
    .wrap {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      .mask, .main {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
      .mask {
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .main {
        height: 70%;
        overflow: hidden;
        background-color: white;
        display: flex;
        position: relative;
        li {
          position: relative;
          height: 50px;
          line-height: 50px;
        }
        li + li::after {
          content: "";
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          height: 1px;
          background-color: #e5e5e5;
          transform-origin: 0 100%;
          transform: scaleY(0.5);
        }
        @each $i in 1, 2, 3 {
          &[deep="#{$i}"] {
            > * {
              position: relative;
              width: 100% / $i;
            }
          }
        }
        &[deep='1'] {
          li {
            text-align: center;
          }
        }
        &[deep='2'] {
          > div:first-child {
            background-color: #fafafa;
          }
          &::after {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: #e5e5e5;
            content: "";
            transform: scaleX(0.5);
            transform-origin: 0 0;
          }
          li {
            &.current {
              background-color: white;
            }
            padding-left: 15px;
          }
        }
      }
    }
    &::after {
      margin-left: 5px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #999;
      display: inline-block;
      content: "";
      //position: absolute;
      height: 0;
      width: 0;
    }
  }
</style>
