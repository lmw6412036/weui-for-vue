<template>
  <div>
    <header>头</header>
    <chart :data="data" :hasfoot="hasfoot" :height="chartHeight"></chart>
  </div>
</template>
<script>
  import Chart from "../components/chart/index.vue"
  import ChartMsg from "../data/chartMsg"
  export default {
    components: {Chart},
    data(){
      return {
        chartHeight: 0,
        hasfoot: true,
        data: []
      }
    },
    mounted(){
      for (let i = 0; i < 5; i++) {
        this.data.push(new ChartMsg(i));
      }
      this._setChartHeight();
    },
    methods: {
      _setChartHeight(){
        let hhh = window.innerHeight;
        this.chartHeight = hhh - 45;
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    line-height: 45px;
    height: 45px;
    background-color: white;
  }
</style>
