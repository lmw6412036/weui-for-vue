<template>
  <div class="">
    <header ref="header">头</header>
    <scroll-view @scroll-view:pulldown="pulldown" @scroll-view:pullup="pullup" :height="scrollHeight" :data="demo">
      <ul>
        <li v-for="i in demo">{{i}}</li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
  import ScrollView from "../../components/scroll/scroll-view.vue"
  export default {
    data() {
      return {
        scrollHeight: 0,
        demo: []
      };
    },
    computed: {},
    components: {ScrollView},
    mounted() {
      setTimeout((res) => {
        for (let i = 0; i < 100; i++) {
          this.demo.push(i);
        }
      }, 3000)
      this._setScrollHeight();
    },
    beforeDestroy() {

    },
    methods: {
      _setScrollHeight(){
        let hhh = window.innerHeight;
        let h = this.$refs.header.clientHeight;
        this.scrollHeight = hhh - h;
      },
      pullup(value){
        console.log(value);
      },
      pulldown(value){
        console.log(value);
        setTimeout((res) => {
          for (let i = 0; i < 10; i++) {
            this.demo.push(i);
          }
        }, 3000)
      }
    }
  };
</script>

<style scoped lang="scss">
  header {
    height: 45px;
    background-color: white;
  }
</style>
