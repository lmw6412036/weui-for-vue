<template>
    <div ref="navSelect" class="nav-select">
        <span>选择</span>
        <div ref="wrap" class="wrap">
            <div class="mask"></div>
            <div class="main"></div>
        </div>
    </div>
</template>

<script>
    import {timeFormat} from "d3-time-format"
    import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        data() {
            return {};
        },
        computed: {},
        components: {},
        mounted() {
            var hhh = window.innerHeight;
            var www = window.innerWidth;
            var h = this.$refs.navSelect.clientHeight;
            this.$refs.wrap.style.top = h + "px";
        },
        beforeDestroy() {

        },
        methods: {}
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
            .mask,.main{
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
            }
            .mask{
                bottom: 0;
                background-color: rgba(0,0,0,0.5);
            }
            .main{
                height: 70%;
                overflow: hidden;
                background-color: white;
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
