<template>
  <div class="">
    <header ref="header">头</header>
    <scroll :data="demo" :height="scrollHeight">
      <ul>
        <li v-for="i in demo">{{i}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../components/scroll/scroll.vue"
  export default {
    data() {
      return {
        scrollHeight: 0,
        demo: []
      };
    },
    computed: {},
    components: {Scroll},
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
