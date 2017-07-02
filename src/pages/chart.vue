<template>
    <div>
        <header>头</header>
        <chart :height="chartHeight"></chart>
    </div>
</template>
<script>
    import Chart from "../components/chart/index.vue"
    export default {
        components: {Chart},
        data(){
            return {
                chartHeight: 0
            }
        },
        mounted(){
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
